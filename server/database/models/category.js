const { db } = require('../index.js');

const Category = db.Model.extend({
  tableName: 'categories'
})

module.exports = Category;