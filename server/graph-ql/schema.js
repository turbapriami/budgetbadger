module.exports = `
  type User {
    id: Int!
    email: String!
    password: String!
    transactions: [Transaction!]
  }

  type Transaction {
    id: Int!
    user_id: Int!
    amount: Int!
    category: String!
    user: [User!]
  }

  type Query {
    getUser(email: String!, id: Int): [User!]
    getTransactions(user_id: Int!): [Transaction!]
  }

  type Mutation {
    createTransaction(user_id: Int!, amount: Int!, category: String!): Transaction
    createUser(email: String!, password: String!): User
    deleteUser(email: String!): Int!
    loginUser(email: String!, password: String!): String!
  }
`