const jwt = require('jsonwebtoken');
const _ = require('lodash')

module.exports = {

  User: {
    transactions: ({ id }, args, { knex }) => 
      knex('transactions').where({
        user_id: id
      }),
    accounts: ({ id }, args, { knex }) => 
      knex('accounts').where({
        user_id: id
      })
  },

  Transaction: {
    user: ({ user_id }, args, { knex }) => 
      knex('users').where({
        id: user_id
      }),
    account: ({ account_id }, args, { knex }) => 
      knex('accounts').where({
        id: account_id
      })
  },

  Account: {
    transactions: ({ id }, args, { knex }) => 
      knex('transactions').where({
        account_id: id
      })
  },

  Category: {
    transactions: ({ id }, args, { knex }) => 
      knex('transactions').where({
        category_id: id
      })
  },

  Query: {
    getUser: (parent, { email }, { knex, user }) => 
      // ADD THE BELOW LOGIC TO ANY PRIVATE ROUTES
      // if (user) {
        knex('users').where({
          email
        }),
      // } else {
        // throw new Error('Not authenticated')
      // }
    // },

    getTransactions: (parent, { user_id }, { knex }) => 
      knex('transactions').where({
        user_id
      }),

    getAccounts: (parent, { user_id }, { knex }) => 
      knex('accounts').where({
        user_id
      }),

    getAccount: (parent, { account_id }, { knex }) =>
      knex('accounts').where({
        account_id
      }),

    getCategories: (parent, args, { knex }) => 
      knex('categories').where({
      }),

    getCategory: (parent, { category_id }, { knex }) =>
      knex('categories').where({
        category_id
      }),



    },

  Mutation: {
    createUser: async (parent, args, { dbUser }) => await new dbUser(args).save(),
    deleteUser: (parent, args, { knex }) => knex('users').where(args).del(),
    loginUser: async (parent, { email, password }, { dbUser, APP_SECRET }) => {
      const newUser = await new dbUser({ email }).fetch();
      if (!newUser) {
        throw new Error('Unable to match the prodided credentials');
      }

      const match = await newUser.comparePassword(password);
      if (!match) {
        throw new Error('Unable to match the provided credentials');
      }

      const token = jwt.sign({ user: _.pick(newUser.attributes, ['id', 'email'])}, APP_SECRET, {
        expiresIn: 360*60
      })
      return token
    },
    createTransaction: (parent, args, { knex }) => knex('transactions').insert(args),
    createAccount: (parent, args, { knex }) => knex('accounts').insert(args),
    createCategory: (parent, args, { knex }) => knex('categories').insert(args),
  }
}