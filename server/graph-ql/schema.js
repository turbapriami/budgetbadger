module.exports = `
  type User {
    id: Int!
    email: String!
    password: String!
    transactions: [Transaction!]
  }

  type Transaction {
    id: Int!
    userid: Int!
    amount: Int!
    category: String!
    user: User!
  }

  type Query {
    getUser(email: String!): [User!]
    getTransactions(userid: Int!): [Transaction!]
  }

  type Mutation {
    createTransaction(userid: Int!, amount: Int!, category: String!): Transaction
    createUser(email: String!, password: String!): User
    deleteUser(email: String!): Int!
    loginUser(email: String!, password: String!): String!
  }
`