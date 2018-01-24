const knex = require('../database/index.js').knex;
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLSchema
} = require('graphql');


const User = new GraphQLObjectType({
  name: 'User',
  description: 'User object',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(user) {
          return user.id;
        }
      },
      username: {
        type: GraphQLString,
        resolve(user) {
          return user.username
        }
      },
      email: {
        type: GraphQLString,
        resolve(user) {
          return user.email
        }
      },
      transactions: {
        type: new GraphQLList(Transaction),
        resolve(user) {
          return knex('transactions').where({userid: user.id})
        }
      }
    }
  }
});

const Transaction = new GraphQLObjectType({
  name: 'Transaction',
  descirption: 'This is a transaction',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(transaction) {
          return transaction.id;
        }
      },
      amount: {
        type: GraphQLString,
        resolve(transaction) {
          return transaction.amount;
        }
      },
      category: {
        type: GraphQLString,
        resolve(transaction) {
          return transaction.category;
        }
      },
      userid: {
        type: GraphQLInt,
        resolve(transaction) {
          return transaction.userid;
        }
      }
    }
  }
})

const Query = new GraphQLObjectType({
  name: 'Query',
  descirption: 'This is a root query',
  fields: () => {
    return {
      users: {
        type: new GraphQLList(User),
        args: {
          id: {
            type: GraphQLInt
          },
          email: {
            type: GraphQLString
          },
          username: {
            type: GraphQLString
          },
          // transactions: {
          //   type: new GraphQLList(Transaction)
          // }
        },
        resolve(root, args) {
          return knex('users').where(args)
        }
      },
      transactions: {
        type: new GraphQLList(Transaction),
        args: {
          id: {
            type: GraphQLInt
          },
          amount: {
            type: GraphQLString
          },
          category: {
            type: GraphQLString
          },
          userId: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return knex('transactions').where(args)
        }
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation',

})

const Schema = new GraphQLSchema({
  query: Query
});

module.exports = Schema;

