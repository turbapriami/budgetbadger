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
    category_id: String!
    name: String!
    account_id: String
    street: String
    zip_code: String
    state: String
    user: [User!]
  }

  type Category {
    id: String!
    name: String!
    transactions: [Transaction!]
  }

  type Account {
    id: Int!
    user_id: Int!
    bank_name: String!
    type: String!
    access_token: String!
    transactions: [Transaction!]
  }

  type Query {
    getUser(email: String!, id: Int): [User!]
    getTransactions(user_id: Int!): [Transaction!]
  }

  type Mutation {
    createTransaction(user_id: Int!, amount: Int!, category_id: String!, name: String!, street: String, zip_code: String, state: String, account_id: String, ): Transaction
    createUser(email: String!, password: String!): User
    createAccount(user_id: Int!, bank_name: String!, type: String!, access_token: String!): Account
    createCategory(name: String!): Category
    deleteUser(email: String!): Int!
    loginUser(email: String!, password: String!): String!
  }
`