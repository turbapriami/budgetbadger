const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const { buildSchema } = require('graphql');
const Schema = require('./graph-ql/Schema.js');
const db = require('./database/index.js');

const port = process.env.PORT || 1337;

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')))

// const root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));

app.listen(port, (err) => {
  console.log('Listening on port: ' + port);
});

module.exports = app;