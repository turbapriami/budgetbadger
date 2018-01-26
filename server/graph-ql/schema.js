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
    school: [School!]
    accounts: [Account!]
    banks: [Bank!]
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

  type Query {
    getUser(email: String!, id: Int): [User!]
    getTransactions(user_id: Int!): [Transaction!]
    getAccounts(user_id: Int!): [Account!]
    getAccount(account_id: String!): [Account!]
    getCategories(name: String!): [Category!]
    getCategory(category_id: String!): [Category!]
    getSchools(user_id: Int!): [School!]
  }

  type Mutation {
    createTransaction(user_id: Int!, amount: Int!, category_id: String!, name: String!, street: String, zip_code: String, state: String, account_id: String, ): Transaction
    createUser(email: String!, password: String!): User
    createAccount(id: String!, user_id: Int!, bank_name: String!, type: String!, access_token: String!): Account!
    createCategory(name: String!): Category
    createSchool(name: String!): School!
    deleteUser(email: String!): Int!
    loginUser(email: String!, password: String!): String!
    updateUser(
      email: String!,
      first_name: String,
      last_name: String,
      street: String,
      zip_code: String,
      state: String,
      phone: String,
      school: String
    ): User
    addBank(id: String!, access_token: String!, user_id: Int!): Bank
  }
  `