import gql from 'graphql-tag'

export const TRANS_ACC_QUERY = gql`
  query TRANS_ACC_QUERY($user_id: Int!) {
    getTransactions(user_id: $user_id) {
        amount
        name
        category
        account {
          type
          bank_name
        }
      }
    getAccounts(user_id: $user_id) {
      type
      bank_name
      id
    }
  }`

// const NEW_TRANS_MUTATION = gql`
//     mutation NEW_TRANS_MUTATION($user_id: Int!){
//       getUpdatedTransactions(user_id: $user_id) {
//         id
//       }
//     }
//   `

// const newBankQuery = gql`
//     mutation newBankQuery($user_id: Int!, $public_key: String!) {
//       createBankAccounts(user_id: $user_id, public_key: $public_key)
//     }
//   `

// module.exports = {
//   TRANS_ACC_QUERY,
//   NEW_TRANS_MUTATION,
//   newBankQuery
// }