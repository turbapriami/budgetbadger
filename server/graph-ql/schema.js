module.exports = `
  scalar Date

  type User {
    id: Int!
    email: String!
    password: String!
    first_name: String
    last_name: String
    street: String
    zip_code: String
    state: String
    phone: String
    transactions: [Transaction!]
    school: [School!]
    accounts: [Account!]
    banks: [Bank!]
    bills: [Bill!]
  }

  type Loan {
    id: Int!
    name: String!
    amount: Int!
    interest_rate: Int!
    inception_date: String!
    end_date: String!
    recurrence: String!
    user_id: Int!
    user: [User!]
    loan_payments: [Loan_Payment!]
  }

  type Loan_Payment {
    id: Int!
    amount: Int!
    date: String!
    loan_id: Int!
    user_id: Int!
    user: [User!]
    loan: [Loan!]
  }

  type Transaction {
    id: Int!
    user_id: Int!
    amount: Int!
    category_id: String!
    name: String!
    account_id: String
    street: String
    zip_code: String
    state: String
    user: [User!]
    account: [Account!]
    category: [Category!]
  }

  type Category {
    id: String!
    name: String!
    transactions: [Transaction!]
  }

  type Account {
    id: String!
    user_id: Int!
    bank_name: String!
    type: String!
    transactions: [Transaction!]
  }

  type School {
    id: Int!
    name: String!
    user_id: [User!]
  }

  type Bank {
    id: String!
    access_token: String!
    user_id: Int!
  }
  
  type Bill {
    id: Int!
    user_id: Int!
    bill_category_id: Int!
    description: String!
    amount: Float!
    due_date: Date!
    paid: Boolean
    paid_date: Date
    alert: Boolean
    bill_category: [Category!]
  }

  type BillCategory {
    id: Int!
    name: String!
    bills: [Bill!]
  }

  type Query {
    getUser(email: String, id: Int): [User!]
    getTransactions(user_id: Int!): [Transaction!]
    getAccounts(user_id: Int!): [Account!]
    getAccount(account_id: String!): [Account!]
    getCategories(name: String!): [Category!]
    getCategory(category_id: String!): [Category!]
    getSchools(user_id: Int!): [School!]
    getBills(user_id: Int!): [Bill!]
    getBillCategories(user_id: Int): [Category!]
    getLoans(user_id: Int!): [Loan!]
    getLoanPayments(loan_id: Int!): [Loan_Payment!]
  }

  type Mutation {
    createTransaction(user_id: Int!, amount: Int!, category_id: String!, name: String!, street: String, zip_code: String, state: String, account_id: String, ): Transaction
    createUser(email: String!, password: String!): User
    createAccount(id: String!, user_id: Int!, bank_name: String!, type: String!, access_token: String!): Account!
    createCategory(name: String!): Category
    createSchool(name: String!): School!
    createLoan(name: String!, amount: Int!, interest_rate: Int!, inception_date: String!, end_date: String!, user_id: Int!, recurrence: String!): Loan
    createLoanPayment(amount: Int!, date: String!, loan_id: Int!, user_id: Int!): Loan_Payment
    deleteUser(email: String!): Int!
    loginUser(email: String!, password: String!): String!
    addBank(id: String!, access_token: String!, user_id: Int!): Bank
    updateUser(    
      email: String!
      first_name: String
      last_name: String
      street: String
      zip_code: String
      state: String
      phone: String): User
    createBill(user_id: Int!, bill_category_id: Int!, description: String!, amount: Float!, due_date: Date!, paid: Boolean, paid_date: Date, alert: Boolean): Bill!
    deleteBill(id: Int!): Int!
    updateBill(id: Int!, user_id: Int!, bill_category_id: Int!, description: String!, amount: Float!, due_date: Date!, paid: Boolean, paid_date: Date, alert: Boolean): Bill!
    createBillCategory(name: String!): BillCategory!
    updateBillCategory(id: Int!, name: String!): BillCategory!
    deleteBillCategory(id: Int!): Int!
  }
  `