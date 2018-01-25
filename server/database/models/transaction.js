const db = require('../index.js');
const User = require('./user.js')
const Category = require('./category.js')
const Account = require('./account.js')

const Transaction = db.Model.extend({
  tableName: 'transactions',
  user_id: () => {
    return this.belongsTo(User, 'id');
  },
  category_id: () => {
    return this.belongsTo(Category, 'id');
  },
  account_id: () => {
    return this.belongsTo(Account, 'id');
  }
})

module.exports = Transaction;