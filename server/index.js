require('dotenv').config()
const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const { buildSchema } = require('graphql');
const port = process.env.PORT || 1337;

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')))

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, (err) => {
  console.log('Listening on port: ' + port);
});

module.exports = app;