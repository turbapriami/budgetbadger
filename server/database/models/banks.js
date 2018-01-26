const { db } = require('../index.js');

const Account = db.Model.extend({
  tableName: 'banks',
  user_id: () => {
    return this.belongsTo(Account, 'id');
  }
})

module.exports = Account;