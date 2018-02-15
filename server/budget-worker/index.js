require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const cors = require('cors');
const moment = require('moment')
const port = process.env.WORKER_PORT || 8002;
const knex = require('../database/index.js').knex;
const models = require('../database/models/index.js');
const schedule = require('node-schedule')

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const trackBalance = schedule.scheduleJob('0 0 1 * *', () => {
//   knex('accounts').then(res => {
//     res.forEach((account) => {
//       knex('monthly_balance').where({
//         account_id: account.id,
//         amount: account.current_balance,
//         date: moment().format('YYYY-MM-DD')
//       }).then((found) => {
//         if (found.length === 0) {
//           new models.MonthlyBalance({
//             account_id: account.id,
//             amount: account.current_balance,
//             date: moment().format('YYYY-MM-DD')
//           }).save()
//         } else {
//           console.log('come back in a month')
//         }
//       })
//     })
//   })
// })

const checkGoals = () => {
  knex('goals').then(goals => {
    goals.forEach(goal => {
      knex('goal_accounts').where({
        goal_id: goal.id
      })
      .then(accounts => {
        knex('goal_categories').where({
          goal_id: goal.id
        })
        .then(categories => {
          // console.log(goal.id, accounts, categories)
          accounts = accounts.filter(account => {
            if (account.goal_id === goal.id) {
              return account
            }
          })
          categories = categories.filter(category => {
            if (category.goal_id === goal.id) {
              return category
            }
          })
          if (accounts.length === 0) {
            knex('accounts').where({
              user_id: goal.user_id
            }).then(allUserAccounts => {
              calculateGoalProgress(goal, allUserAccounts, categories)
            })
          } else {
            calculateGoalProgress(goal, accounts, categories)
          }
        })
      })
    })
  })
}

const calculateGoalProgress = (goal, accounts, categories) => {
  // operate on each account's transactions based on categories
  allAccountsTotal = 0
  Promise.all(
    accounts.map(account => {
      return knex('transactions').where({
        user_id: goal.user_id,
        account_id: account.account_id || account.id
      }).then(transactions => {
        // filter transactions by date and category if specified
        if (categories.length === 0) {
          transactions = transactions.filter(transaction => {
            if (moment(transaction.date).format('YYYY-MM') === moment().format('YYYY-MM')) {
              return transaction
            }
          })
        } else {
          transactions = transactions.filter(transaction => {
            for (let category of categories) {
              if (
                transaction.category === category.name &&
                moment(transaction.date).format('YYYY-MM') === moment().format('YYYY-MM')
              ) {
                return transaction
              }
            }
          })
        }
        // reduce transactions to single total and add to allAccountsTotal
        transactionsTotal = transactions.reduce((acc, elem) => {
          return acc + Number(elem.amount)
        }, 0)
        allAccountsTotal += transactionsTotal
      })
    })
  ).then(fin => {
    updateGoalProgress(allAccountsTotal, goal)
  })
}

const updateGoalProgress = (total, goal) => {
  knex('goal_progress').where({
    goal_id: goal.id,
    date: moment().format('YYYY-MM')
  }).then(found => {
    if (found.length === 0) {
      new models.GoalProgress({
        goal_id: goal.id,
        amount: total,
        date: moment().format('YYYY-MM')
      }).save()
    } else {
      new models.GoalProgress({
        id: found[0].id
      })
      .save({
        amount: total
      }, {
        patch: true
      })
    }
  })
}

checkGoals()

const goalProgressSchedule = schedule.scheduleJob('30 * * * *', () => {
  checkGoals()
})

const trackBalance = () => {
  knex('accounts').then(res => {
    res.forEach((account) => {
      knex('monthly_balance').where({
        account_id: account.id,
        amount: account.current_balance,
        date: moment().format('YYYY-MM-DD')
      }).then(found => {
        if (found.length === 0) {
          new models.MonthlyBalance({
            account_id: account.id,
            amount: account.current_balance,
            date: moment().format('YYYY-MM-DD')
          }).save()
        } else {
          console.log('come back in a month')
        }
      })
    })
  })
}

// trackBalance()

app.listen(port, () => {
  console.log('BUDGET TRACKER running on port ' + port)
})