const db = require('../index.js');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');

const User = db.Model.extend({
  tableName: 'users',
  userid: () => {
    return this.belongsTo(User, 'id');
  }
})