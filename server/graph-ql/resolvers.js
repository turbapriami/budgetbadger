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
      }),

    school: ({ id }, args, { knex }) =>
      knex('schools').where({
        user_id: id
      }),

    // use bank to update accounts/transactions info via Plaid
    banks: ({ id }, args, { knex }) =>
      knex('banks').where({
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
      }),

    category: ({ category_id }, args, { knex }) =>
      knex('categories').where({
        id: category_id
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

    getSchools: (parent, { id }, { knex }) =>
      knex.select().from('schools').where({
        id
      }),
  },

  Mutation: {
    createUser: async (parent, args, { models }) => await new models.User(args).save(),

    deleteUser: (parent, args, { knex }) => knex('users').where(args).del(),

    loginUser: async (parent, { email, password }, { models, APP_SECRET }) => {
      const newUser = await new models.User({ email }).fetch();
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

    createTransaction: async (parent, args, { models }) => {
      const transaction = await new models.Transaction(args).save(null, {method: 'insert'});
      return transaction.attributes;
    },

    createAccount: async (parent, args, { knex, models }) => {
      const account = await new models.Account(args).save(null, {method: 'insert'});
      return account.attributes;
    },

    createCategory: async (parent, args, { models }) => {
      const category = await new models.Category(args).save(null, {method: 'insert'});
      return category.attributes;
    },

    createSchool: async (parent, args, { models }) => {
      const school = await new models.School(args).save(null, {method: 'insert'});
      return school.attributes;
    },

    addBank: async (parent, args, { models }) => {
      const bank = await new models.Bank(args).save(null, {method: 'insert'});
      return bank.attributes;
    }
  }
}