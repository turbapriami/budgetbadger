const { db } = require('../index.js');
const User = require('./user.js');
const BillCategory = require('./billcategory.js');

const Bill = db.Model.extend({
  tableName: 'bills',
  user_id: () => {
    return this.belongsTo(User, 'id');
  },
  bill_category_id: () => {
    return this.belongsTo(BillCategory, 'id');
  }
})

module.exports = Bill;