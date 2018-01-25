const db = require('../index.js');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');

const User = db.Model.extend({
  tableName: 'users',
  user_id: () => {
    return this.belongsTo(User, 'id');
  },
  category_id: () => {
    return this.belongsTo(Category, 'id');
  }
})