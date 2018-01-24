const config = require('./config/index.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const port = config.PORT;

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')))

app.listen(port, (err) => {
  console.log('Listening on port: ' + port);
});

module.exports = app;