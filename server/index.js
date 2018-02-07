require('dotenv').config()
const express = require('express');
const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const typeDefs = require('./graph-ql/schema.js');
const resolvers = require('./graph-ql/resolvers.js');
const db = require('./database/index.js');
const APP_SECRET = process.env.APP_SECRET;
const models = require('./database/models/index.js');
const request = require('request');
const sgMail = require('@sendgrid/mail');

const port = process.env.PORT || 1337;

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const app = express();

app.use(cookieParser())

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  printErrors: true
})

const getToken = async (req) => {
  try {
    const { user_id, token } = JSON.parse(req.cookies.user)
    req.user = { user } = await jwt.verify(token, APP_SECRET);
  } catch (err) {
    console.log(err);
  }
  req.next()
}

const chooseDirectory = (req, res) => {
  if (req.user) {
    req.next()
  } else {
    res.redirect('/home')
  }
}

const homeCheck = (req, res) => {
  if (req.user) {
    res.redirect('/')
  } else {
    req.next()
  }
}


app.use(cors({credentials: true}))
app.post('/passwordRecovery', (req, res) => {
  console.log("DATA",req.data);
  var options = { method: 'POST',
  url: 'https://api.sendgrid.com/v3/mail/send',
    headers: 
    { 'content-type': 'application/json',
      authorization: `Bearer ${SENDGRID_API_KEY}` },
    body: 
    { personalizations: 
        [ { to: [ { email: 'jk73576@gmail.com', name: 'Jimmy' } ],
            subject: 'Yo' } ],
      from: { email: 'afriedman1991@gmail.com', name: 'Alex' },
      reply_to: { email: 'afriedman1991@gmail.com', name: 'Alex' },
      subject: 'Yo, World',
      content: 
        [ { type: 'text/html',
            value: '<html><p>Does dis do it doe?</p></html>' } ] },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
})

app.use(morgan('dev'))

app.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
app.use(/\/((?!graphql).)*/, bodyParser.json());
// app.use(bodyParser.text({ type: 'text/plain' }));

const logger = (req, res, next) => {
  next();
}
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.use(getToken); // => uncomment to enable authentication


app.use('/graphql',
  bodyParser.json(), 
  // getToken,
  logger,
  graphqlExpress(req => ({
    schema: schema,
    pretty: true,
    context: {
      user: req.user,
      knex: db.knex,
      APP_SECRET,
      models
    }
  }))
);


app.use('/home', homeCheck, express.static(path.join(__dirname, '../public/splash')));

app.use(chooseDirectory)

app.use(express.static(path.join(__dirname, '../public/main')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/main', 'index.html'));
})

app.listen(port, (err) => {
  console.log('Listening on port: ' + port);
});

module.exports = app;