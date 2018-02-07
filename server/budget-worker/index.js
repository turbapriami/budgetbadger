require('dotenv').config()
import { ID_KEY } from '../../public/main/main-bundle';
const express = require('express');
const bodyParser = require('body-parser');
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

const trackGoals = () => {
  knex('goals').then(res => {
    res.forEach((goal) => {
      knex('goal_progress').where({
        goal_id: goal.id,
        date: moment().format('YYYY-MM-DD')
      }).then(found => {
        if (found.length === 0) {
          new models.GoalProgress({
            goal_id: goal.id,
            // amount: calculated,
            date: moment().format('YYYY-MM-DD')
          }).save()
        } else {
          console.log('wait until the next half hour')
        }
      })
    })
  })
}

const calculateGoalProgress = (id) => {
  knex('transactions').where({
    user_id: id,

  }).then(found => {

  })
}

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
trackBalance()

app.listen(port, () => {
  console.log('BUDGET TRACKER running on port ' + port)
})