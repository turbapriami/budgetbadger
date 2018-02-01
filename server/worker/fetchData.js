const banks = [ {
    id: 'x36QeJXemLs6GMAjq5DvT16bJDo4NVsyaZXwN',
    access_token: 'access-sandbox-d6993e81-16d3-4b11-aee4-fedf8bb9670a',
    user_id: 1 } ]

// const knex = require('../database/index.js').knex;
const models = require('../database/index.js');
const Promise = require('bluebird');
const plaid = require('../plaid.js');

// const fetchBanks = () => {
//   return knex.select('*').from('banks').then(res => {
//     return res
//   });
// }

const fetchTransactions = async (banks) => {
  const date1 = new Date(Date.now() - 864e5)
  const date = '1990-10-10'
  const banks = await fetchBanks()
  return await Promise.all(banks.map(async (bank) => {
    let user = await plaid.getAccountsAndTransactions(bank.access_token, date)
    user.user_id = bank.user_id;
    return user;
  }))
}

const parseTransactions = async () => {
  const recentTransactions = await fetchTransactions();
  recentTransactions.forEach(user => {
    let user_id = user.user_id;
    user.transactions.forEach(transaction => {
      let category = transaction.category ? transaction.category[0] : 'none';
      let newTransaction = {
        user_id,
        category,
        plaid_id: transaction.id,
        date: transaction.date,
        account_id: transaction.account_id,
        amount: transaction.amount,
        name: transaction.name
      }
      new models.Transaction({plaid_id: transaction.id})
      .fetch()
      .then(exists => {
        if (!exists) {
          new models.Transaction(newTransaction).save(null, {method: 'insert'});
        }
      })
    })
  })
}

module.exports = parseTransactions;


// console.log(plaid.getAccountsAndTransactions(banks[0].access_token, '1990-10-10').then(res =>console.log(res)))