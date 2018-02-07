const { db } = require('../index.js');

const MonthlyBalance = db.Model.extend({
  tableName: 'monthly_balance',  
  user_id: () => {
    return this.belongsTo(User, 'id');
  }
})

module.exports = MonthlyBalance;