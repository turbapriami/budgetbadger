const { db } = require('../index.js');

const Account = db.Model.extend({
  tableName: 'accounts',
  user_id: () => {
    return this.belongsTo(Account, 'id');
  },
  bank_id: () => {
    return this.belongsTo(Bank, 'id');
  },
})

module.exports = Account;