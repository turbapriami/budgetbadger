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