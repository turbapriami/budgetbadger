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
  mutation UPDATE_TRANSACTIONS($user_id: Int!){
    getUpdatedTransactions(user_id: $user_id) {
      id
    }
  }`

const CREATE_TRANSACTION = gql`
  mutation CREATE_TRANSACTION($user_id: Int!, $amount: Float!, $date: String!, $category: String!, $name: String!, $account_id: String!) {
    createTransaction(user_id: $user_id, amount: $amount, date: $date, category: $category, name: $name, account_id: $account_id) {
      id
    }
  }
  `

const NEW_BANK = gql`
  mutation NEW_BANK($user_id: Int!, $public_key: String!) {
    createBankAccount(user_id: $user_id, public_key: $public_key)
  }`

const DASH_QUERY = gql`
  query DASH_QUERY($user_id: Int!) {
    getTransactions(user_id: $user_id) {
      amount
      name
      account {
        type
      }
    }
    getAccounts(user_id: $user_id) {
      type
      bank_name
    }
    getBills(user_id: $user_id) {
      description
      bill_category {
        name
      }
      amount
      due_date
      paid
    }
  }`

export {
  TRANS_ACC_QUERY,
  UPDATE_TRANSACTIONS,
  CREATE_TRANSACTION,
  NEW_BANK,
  DASH_QUERY
}