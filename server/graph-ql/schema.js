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
    accounts: [Account!]
    bills: [Bill!]
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
    access_token: String!
    transactions: [Transaction!]
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
    getUser(email: String!, id: Int): [User!]
    getTransactions(user_id: Int!): [Transaction!]
    getAccounts(user_id: Int!): [Account!]
    getAccount(account_id: String!): [Account!]
    getCategories(name: String!): [Category!]
    getCategory(category_id: String!): [Category!]
    getBills(user_id: Int!): [Bill!]
    getBillCategories(user_id: Int!): [Category!]
  }

  type Mutation {
    createTransaction(user_id: Int!, amount: Int!, category_id: String!, name: String!, street: String, zip_code: String, state: String, account_id: String, ): Transaction
    createUser(email: String!, password: String!): User
    createAccount(id: String!, user_id: Int!, bank_name: String!, type: String!, access_token: String!): Account!
    createCategory(name: String!): Category
    deleteUser(email: String!): Int!
    loginUser(email: String!, password: String!): String!
    createBill(id: Int!, user_id: Int!, bill_category_id: Int!, description: String!, amount: Float!, due_date: Date!, paid: Boolean, paid_date: Date, alert: Boolean): Bill!
    deleteBill(id: Int!): Int!
    updateBill(id: Int!, user_id: Int!, bill_category_id: Int!, description: String!, amount: Float!, due_date: Date!, paid: Boolean, paid_date: Date, alert: Boolean): Bill!
    createBillCategory(name: String!): BillCategory!
    updateBillCategory(id: Int!, name: String!): BillCategory!
    deleteBillCategory(id: Int!): Int!
  }
`