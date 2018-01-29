const plaid = require('plaid');
const moment = require('moment');
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_PUBLIC_KEY = process.env.PLAID_PUBLIC_KEY;
const PLAID_ENV = process.env.PLAID_ENV || plaid.environments.sandbox;

const plaidClient = new plaid.Client(PLAID_CLIENT_ID, PLAID_SECRET, PLAID_PUBLIC_KEY, plaid.environments.sandbox);

const exchangeToken = (public_token, callback) => {
  plaidClient.exchangePublicToken(public_token || 'public-sandbox-e19fb01e-7942-40a7-81fd-ba9af519aecb', (err, res) => {
    console.log('res', res)
    callback(res)
  });
}

const getAccounts = (access_token, callback) => {
  plaidClient.getAccounts(access_token, async(err, res) => {
    callback(res)
  })
}

const getAccountsAndTransactions = (access_token, startDate, callback) => {
  const currentDateTime = moment().format('YYYY-MM-DD');
  plaidClient.getTransactions(access_token, startDate, currentDateTime, (err, res) => {
    callback(res)
  });
}

// exchangeToken(public_token, (data) => {
  // console.log(data)
  // console.log(data.item_id)
  // console.log(data.access_token)
// })

// getAccounts(access_token, (data) => {
//   console.log(data)
// })

// getAccountsAndTransactions(access_token, startDate, (data) => {
//   console.log(data)
//   console.log(data.accounts)
//   console.log(data.transactions)
// })


module.exports = {
  exchangeToken,
  getAccounts,
  getAccountsAndTransactions
}