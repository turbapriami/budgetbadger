const { db } = require('../index.js');

const GoalCategory = db.Model.extend({
  tableName: 'goal_accounts',  
  goal_id: () => {
    return this.belongsTo(Goal, 'id');
  }
})

module.exports = GoalCategory;