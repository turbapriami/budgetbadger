require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.WORKER_PORT || 8002;
const knex = require('../database/index.js').knex;
const models = require('../database/index.js');
const schedule = require('node-schedule')

const app = express();
app.use(cors());
app.use(bodyParser.json());

// check this months totals in a category or all if no category
// add up monthly spending

const checkBudgets = schedule.scheduleJob('30 * * * *', () => {

})

app.listen(port, () => {
  console.log('BUDGET TRACKER running on port ' + port)
})