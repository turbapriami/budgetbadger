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
const typeDefs = require('./graph-ql/Schema.js');
const resolvers = require('./graph-ql/resolvers.js');
const db = require('./database/index.js');
const APP_SECRET = process.env.APP_SECRET;
const models = require('./database/models/index.js');

const port = process.env.PORT || 1337;

const app = express();



const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  printErrors: true
})

const getToken = async (req) => {
  console.log('TOKEN?????', req.cookies['TOKEN'])
  try {
    const { user } = await jwt.verify(req.cookies['TOKEN'], APP_SECRET);
    req.user = user;
  } catch (err) {
    console.log(err);
  }
  // req.user = 'user' // <= uncomment to dummy authenticate
  req.next()
}

const chooseDirectory = (req, res) => {
  if (req.user) {
    console.log("OOKOKOKKKKKKK", req.user)
    req.next()
  } else {
    console.log("didn't make it past first check in choose directory");
    res.redirect('/home')
  }
}


// const homeCheck = (req, res) => {
//   if (req.user) {
//     res.redirect('/')
//   } else {
//     req.next()
//   }
// }

// change to req.user to load splash

app.use(cors())

app.use(morgan('dev'))

app.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
app.use(/\/((?!graphql).)*/, bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }));

app.use(cookieParser())

const logger = (req, res, next) => {
  console.log(req.body)
  next();
}
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.use('/graphql',
  bodyParser.json(), 
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

app.use(getToken); // => uncomment to enable authentication

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