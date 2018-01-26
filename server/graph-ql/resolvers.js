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
      }),

    bills: ({ id }, args, { knex }) => 
    knex('bills').where({
      user_id: id
    })
  },

  Loan: {
    user: ({ user_id }, args, { knex }) => 
      knex('users').where({
        id: user_id
      }),
    loan_payments: ({ id }, args, { knex }) =>
      knex('loan_payments').where({
        loan_id: id
      })
  },

  Loan_Payment: {
    user: ({ user_id }, args, { knex }) => 
      knex('users').where({
        id: user_id
      }),
    loan: ({ loan_id }, args, { knex }) =>
      knex('loans').where({
        id: loan_id
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

  Bill: {
    bill_category: ({ id }, args, { knex }) => 
    knex('bills').where({
      bill_category_id: id
    })
  },

  BillCategory: {
    bills: ({ id }, args, { knex }) => 
      knex('bills').where({
        bill_category_id: id
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
      
    getBillCategories: (parent, { user_id }, { knex }) => 
      knex('bills').innerJoin('bill_categories', 'bills.bill_category_id', 'bill_categories.id').where({
        user_id
      }).distinct('bill_categories.name').select(),
    
    getBills: (parent, { user_id }, { knex }) => 
      knex('bills').innerJoin('bill_categories', 'bills.bill_category_id', 'bill_categories.id').where({
        user_id
      }),
    getLoans: (parent, { user_id }, { knex }) => 
      knex('loans').where({
        user_id
      }),
    getLoanPayments: (parent, { loan_id }, { knex }) =>
      knex('loan_payments').where({
        loan_id
      })
    },

  Mutation: {
    createUser: async (parent, args, { models }) => await new models.User(args).save(),

    deleteUser: (parent, args, { knex }) => knex('users').where(args).del(),

    loginUser: async (parent, { email, password }, { models, APP_SECRET }) => {
      const newUser = await new models.User({ email }).fetch();
      if (!newUser) {
        throw new Error('Unable to match the provided credentials');
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
    createBill: async (parent, args, { models }) => {
      const bill = await new models.Bill(args).save(null, {method: 'insert'});
      return bill.attributes;
     },
    updateBill: async (parent, args, { models }) => {
      const bill = await new models.Bill(args).save(null, {method: 'update'});
      return bill.attributes;
    },
    deleteBill: (parent, args, { knex }) => knex('bills').where(args).del(),
    createBillCategory: async (parent, args, { models }) => {
      const billCategory = await new models.BillCategory(args).save(null, {method: 'insert'});
      return billCategory.attributes;
    },
    updateBillCategory: async (parent, args, { models }) => {
      const billCategory = await new models.BillCategory(args).save(null, {method: 'update'});
      return billCategory.attributes;
    },
    deleteBillCategory: (parent, args, { knex }) => knex('bill_categories').where(args).del(),
    updateUser: async (parent, args, {models, knex}) => {
      const { email } = args;
      const user = await new models.User({email}).fetch();
      const { id } = user;
      for(let field in user.attributes) {
        if (args[field]) {
          user.attributes[field] = args[field]
        }
      }
      return knex('users').where({ id }).update(user.attributes);
    },

    createSchool: async (parent, args, { models }) => {
      const school = await new models.School(args).save(null, {method: 'insert'});
      return school.attributes;
    },

    addBank: async (parent, args, { models }) => {
      const bank = await new models.Bank(args).save(null, {method: 'insert'});
      return bank.attributes;
    },

    createBill: async (parent, args, { models }) => {
      const bill = await new models.Bill(args).save(null, {method: 'insert'});
      return bill.attributes;
     },

    updateBill: async (parent, args, { models }) => {
      const bill = await new models.Bill(args).save(null, {method: 'update'});
      return bill.attributes;
    },

    deleteBill: (parent, args, { knex }) => knex('bills').where(args).del(),

    createBillCategory: async (parent, args, { models }) => {
      const billCategory = await new models.BillCategory(args).save(null, {method: 'insert'});
      return billCategory.attributes;
    },

    updateBillCategory: async (parent, args, { models }) => {
      const billCategory = await new models.BillCategory(args).save(null, {method: 'update'});
      return billCategory.attributes;
    },
    
    deleteBillCategory: (parent, args, { knex }) => knex('bill_categories').where(args).del(),
    createLoan: async (parent, args, { models }) => await new models.Loan(args).save(null, {method:'insert'}),
    createLoanPayment: async (parent, args, { models }) => await new models.Loan_Payment(args).save(null, {method: 'insert'}),
  }
}
