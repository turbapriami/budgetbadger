const { db } = require('../index.js');

const Bank = db.Model.extend({
  tableName: 'banks',
  user_id: () => {
    return this.belongsTo(Account, 'id');
  }
})

module.exports = Bank;