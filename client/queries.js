import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

export const TRANS_ACC_QUERY = gql`
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

export const UPDATE_TRANSACTIONS = gql`
  mutation NEW_TRANS_MUTATION($user_id: Int!){
    getUpdatedTransactions(user_id: $user_id) {
      id
    }
  }`

export const CREATE_TRANSACTION = gql`
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

export const NEW_BANK_QUERY = gql`
  mutation newBankQuery($user_id: Int!, $public_key: String!) {
    createBankAccounts(user_id: $user_id, public_key: $public_key)
  }`