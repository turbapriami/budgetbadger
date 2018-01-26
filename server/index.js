require('dotenv').config()
const express = require('express');
const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const typeDefs = require('./graph-ql/Schema.js');
const resolvers = require('./graph-ql/resolvers.js')
const db = require('./database/index.js');
const APP_SECRET = process.env.APP_SECRET;
const models = require('./database/models/index.js')

const port = process.env.PORT || 1337;

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const getToken = async (req) => {
  const token = req.headers.authorization;
  try {
    const { user } = await jwt.verify(token, APP_SECRET);
    req.user = user;
  } catch (err) {
    console.log(err);
  }
  req.next()
}

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')))

// app.use(getToken); // => uncomment to enable authentication

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.use('/graphql', 
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

app.listen(port, (err) => {
  console.log('Listening on port: ' + port);
});

module.exports = app;