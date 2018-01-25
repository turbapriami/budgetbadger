const jwt = require('jsonwebtoken');
const _ = require('lodash')

module.exports = {
  User: {
    transactions: ({ id }, args, { knex }) => 
      knex('transactions').where({
        userid: id
      })
  },

  Transaction: {
    user: ({ userid }, args, { knex }) => 
      knex('users').where({
        id: userid
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

    getTransactions: (parent, { userid }, { knex }) => 
      knex('transactions').where({
        userid
      }),

    },
  Mutation: {
    createUser: async (parent, args, { dbUser }) => await new dbUser(args).save(),
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
    deleteUser: (parent, args, { knex }) => knex('users').where(args).del(),
  }
}