import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const TRANS_ACC_QUERY = gql`
  query TRANS_ACC_QUERY($user_id: Int!) {
    getTransactions(user_id: $user_id) {
        amount
        name
        category
        date
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

const UPDATE_TRANSACTIONS = gql`
  mutation NEW_TRANS_MUTATION($user_id: Int!){
    getUpdatedTransactions(user_id: $user_id) {
      id
    }
  }`

const CREATE_TRANSACTION = gql`
  mutation CREATE_TRANSACTION($user_id: Int!, $amount: Float!, $category: String, $name: String!, $account: String) {
    createTransaction(user_id: $user_id, amount: $amount, category: $category, name: $name, account: $account) {
      name
      category
      amount
      date
      account {
        type
        bank_name
      }
    }
  }`

const NEW_BANK_QUERY = gql`
  mutation NEW_BANK_QUERY($user_id: Int!, $public_key: String!) {
    createBankAccounts(user_id: $user_id, public_key: $public_key)
  }`

export {
  TRANS_ACC_QUERY,
  UPDATE_TRANSACTIONS,
  CREATE_TRANSACTION,
  NEW_BANK_QUERY
}