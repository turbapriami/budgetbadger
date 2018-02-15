const knex = require('./database/index.js').knex;
const Promise = require('bluebird');
const moment = require('moment');
const models = require('../server/database/models/index.js');

const fetchExpiredBills = async () => {
	let currentDate = new Date();
	return knex
		.raw('select * from bills where bill_status = true and end_date < ?', [currentDate])
		.then(res => {
			console.log('successfully fetched expired bills: ', res.rows);
			return res.rows;
		})
		.catch(err => {
			console.log('error fetching expired bills: ', err);
			return err;
		});
};

const deactivateExpiredBills = async () => {
	let inactiveBills = await fetchExpiredBills();
	inactiveBills.forEach(bill => {
		knex('bills')
			.where('id', '=', bill.id)
			.update({
				bill_status: false,
				alert: false,
			})
			.then(res => {
				console.log('successfully deactivated expired bills: ', res);
				return res.rows;
			})
			.catch(err => {
				console.log('error fetching active recurring bills: ', err);
				return err;
			});
	});
};

const fetchActiveRecurringBills = async () => {
	return knex
		.select('*')
		.from('bills')
		.where({ bill_status: true })
		.andWhere('bill_recurrence_id', '>', 1)
		.then(res => {
			console.log('successfully fetched active recurring bills: ', res);
			return res;
		})
		.catch(err => {
			console.log('error fetching active recurring bills: ', err);
			return err;
		});
};

const createBillOccurence = async () => {
	let activeBills = await fetchActiveRecurringBills();
	let currentDate = moment().startOf('day');
	activeBills.forEach(bill => {
		if (moment(bill.last_occurence_date).add(1, 'days').isSame(currentDate)) {
			var nextDueDate;
			if (bill.bill_recurrence_id === 2) {
				nextDueDate = moment(bill.last_occurence_date).add(1, 'weeks');
			} else if (bill.bill_recurrence_id === 3) {
				nextDueDate = moment(bill.last_occurence_date).add(2, 'weeks');
			} else if (bill.bill_recurrence_id === 4) {
				nextDueDate = moment(bill.last_occurence_date).add(1, 'months');
			} else if (bill.bill_recurrence_id === 5) {
				nextDueDate = moment(bill.last_occurence_date).add(1, 'years');
			}
			var bphVars = {
				bill_id: bill.id,
				user_id: bill.user_id,
				amount_paid: null,
				amount_due: bill.amount,
				paid_date: null,
				due_date: nextDueDate,
				paid: false,
			};

			new models.BillPaymentHistory(bphVars)
				.save()
				.then(res => {
					knex('bills')
						.where('id', '=', res.attributes.bill_id)
						.update({
							last_occurence_date: nextDueDate,
						})
						.then(res => {
							console.log('successfully updated bills last_occurrence_date: ', res);
							return res;
						})
						.catch(err => {
							console.log('error updating Last_occurrence_date: ', err);
							return err;
						});
					return res;
				})
				.catch(err => {
					console.log('error saving bill payment history record: ', err);
					return err;
				});
		}
	});
};

module.exports = {
	fetchExpiredBills,
	fetchActiveRecurringBills,
	deactivateExpiredBills,
	createBillOccurence,
};
