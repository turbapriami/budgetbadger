const banks = [ {
    id: 'x36QeJXemLs6GMAjq5DvT16bJDo4NVsyaZXwN',
    access_token: 'access-sandbox-d6993e81-16d3-4b11-aee4-fedf8bb9670a',
    user_id: 1 } ]

// const knex = require('../database/index.js').knex;
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
    return await plaid.getAccountsAndTransactions(bank.access_token, date)
  }))
}

// const parseTransactions = async () => {
//   const todaysTransactions = await knex.select('*').from('recent_transactions');
//   const recentTransactions = await fetchTransactions();

// console.log(plaid.getAccountsAndTransactions(banks[0].access_token, '1990-10-10').then(res =>console.log(res)))

// }
const trans = fetchTransactions(banks)
trans.then(hello => {
  console.log(hello)
  console.log('accounts', hello[0].accounts)
})
.catch(err => {
  console.log(err)
})