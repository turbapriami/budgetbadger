require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment')
const port = process.env.WORKER_PORT || 8003;
const knex = require('./database/index.js').knex;
const models = require('./database/models/index.js');
const schedule = require('node-schedule');
const billworker = require('./billWorker.js');
const app = express();


app.use(cors());
app.use(bodyParser.json());

const deactivateExpiredBills = schedule.scheduleJob('0 0 * * *', () => {
  console.log('BILL WORKER - Deactivating Expired Bills');
  billworker.deactivateExpiredBills();
});

const createBillOccurence = schedule.scheduleJob('0 0 * * *', () => {
  console.log('BILL WORKER - Create Bill Occurence');
  billworker.createBillOccurence();
});

const fetchUnpaidBillsDueNextWeek = schedule.scheduleJob('30 * * * * *', () => {
  billworker.fetchUnpaidBillsDueNextWeek();
  billworker.fetchOverdueBills();
});

app.listen(port, () => {
  console.log('BILL WORKER running on port ' + port)
})