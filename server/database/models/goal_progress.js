const { db } = require('../index.js');

const GoalProgress = db.Model.extend({
  tableName: 'goal_progress',  
  user_id: () => {
    return this.belongsTo(User, 'id');
  }
})

module.exports = GoalProgress;