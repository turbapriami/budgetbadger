module.exports = `
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
  }

  type Transaction {
    id: Int!
    user_id: Int!
    amount: Int!
<<<<<<< HEAD
    category: String!
    user: [User!]
=======
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
>>>>>>> database
  }

  type Query {
    getUser(email: String!, id: Int): [User!]
<<<<<<< HEAD
    getTransactions(userid: Int!): [Transaction!]
=======
    getTransactions(user_id: Int!): [Transaction!]
    getAccounts(user_id: Int!): [Account!]
    getAccount(account_id: String!): [Account!]
    getCategories(name: String!): [Category!]
    getCategory(category_id: String!): [Category!]
>>>>>>> database
  }

  type Mutation {
    createTransaction(user_id: Int!, amount: Int!, category_id: String!, name: String!, street: String, zip_code: String, state: String, account_id: String, ): Transaction
    createUser(email: String!, password: String!): User
    createAccount(id: String!, user_id: Int!, bank_name: String!, type: String!, access_token: String!): Account!
    createCategory(name: String!): Category
    deleteUser(email: String!): Int!
    loginUser(email: String!, password: String!): String!
  }
`