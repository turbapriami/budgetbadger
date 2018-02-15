//PUT FUNCTIONS TO INVOKE ON A SCHEDULE
const knex = require('./database/index.js').knex;
const Promise = require('bluebird');
const moment = require('moment');
const models = require('../server/database/models/index.js');

const fetchExpiredBills = async () => {
  let currentDate = new Date();
  return knex.raw('select * from bills where bill_status = true and end_date < ?', [currentDate])
    .then(res => {
      console.log('expired Bills', res.rows)
      return res.rows;
    })
}

const fetchActiveRecurringBills = async () => {
  return knex.select('*').from('bills').where({'bill_status': true}).andWhere('bill_recurrence_id','>', 1)
    .then(res => {
      // console.log('fetchActiveRecurringBills', res);
      return res;
    })
}

const deactivateExpiredBills = async () => {
  let inactiveBills = await fetchExpiredBills();
  inactiveBills.forEach(bill => {
    knex('bills')
      .where('id', '=', bill.id)
      .update({
        bill_status: false,
        alert: false
      })
      .then(res => {
        return res.rows;
      })
  })
}

const createBillOccurence = async () => {
  let activeBills = await fetchActiveRecurringBills();
  let currentDate = moment().startOf('day');
  //  console.log('Hey');
  activeBills.forEach(bill => {
    // console.log("moment(bill.last_occurence_date)",moment(bill.last_occurence_date),'currentDate', currentDate)
    console.log(moment(bill.last_occurence_date).isSame(currentDate));
    if (moment(bill.last_occurence_date).isSame(currentDate)) {
      var nextDueDate;
      if (bill.bill_recurrence_id === 2) {
        nextDueDate = moment(bill.last_occurence_date).add(1, 'weeks');
        console.log('bill.bill_recurrence_id', bill.bill_recurrence_id,'nextDueDate',nextDueDate);
      } else if (bill.bill_recurrence_id === 3) {
        nextDueDate = moment(bill.last_occurence_date).add(2, 'weeks');
        console.log('bill.bill_recurrence_id', bill.bill_recurrence_id,'nextDueDate',nextDueDate);
      } else if (bill.bill_recurrence_id === 4) {
        nextDueDate = moment(bill.last_occurence_date).add(1, 'months');
        console.log('bill.bill_recurrence_id', bill.bill_recurrence_id,'nextDueDate',nextDueDate);
      } else if (bill.bill_recurrence_id === 5) {
        nextDueDate = moment(bill.last_occurence_date).add(1, 'years');
        console.log('bill.bill_recurrence_id', bill.bill_recurrence_id,'nextDueDate',nextDueDate);
      }
      var bphVars = {
        bill_id:bill.id,
        user_id:bill.user_id, 
        amount_paid: null,
        amount_due: bill.amount,
        paid_date: null,
        due_date: nextDueDate,
        paid: false
      }

      new models.BillPaymentHistory(bphVars)
      .save()
      .then(res => { 
        knex('bills')
        .where('id', '=', res.attributes.bill_id)
        .update({
          last_occurence_date: nextDueDate
        })
        .then(res => {
          console.log("successfully updated bills LOD");
          return res;
        });
        return res;
      });
    }
    })
  }

module.exports = {
  fetchExpiredBills,
  fetchActiveRecurringBills,
  deactivateExpiredBills,
  createBillOccurence
}