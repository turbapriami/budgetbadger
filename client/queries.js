import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
  }`;

const UPDATE_TRANSACTIONS = gql`
  mutation UPDATE_TRANSACTIONS($user_id: Int!){
    getUpdatedTransactions(user_id: $user_id) {
      id
    }
  }`;

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
  }`;

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
      current_balance
    }
    getBills(user_id: $user_id) {
      id
      user_id
      bill_category_id
      description
      amount
      due_date
      paid
      paid_date
      alert
      bill_category {
        name
      }
    }
    getBillCategories(user_id: $user_id) {
      id
      name
    }
  }`;

const BILLS_QUERY = gql`
  query BILLS_QUERY($user_id: Int!) {    
    getBills(user_id: $user_id) {
      id
      user_id
      bill_category_id
      description
      amount
      due_date
      paid
      paid_date
      alert
      bill_category {
        name
      }
    }
    getBillCategories(user_id: $user_id) {
      id
      name
    }
  }`;

const CREATE_BILL = gql`
  mutation createBill($user_id: Int!, $bill_category_id: Int!, $description: String!, $amount: Float!, $due_date: Date!, $paid: Boolean) {
    createBill(user_id: $user_id, bill_category_id: $bill_category_id, description: $description, amount: $amount, due_date: $due_date, paid:$paid) {
      id
    }
  }`;


const UPDATE_BILL = gql`
  mutation updateBill($id: Int!, $user_id: Int!, $bill_category_id: Int, $description: String, $amount: Float, $due_date: Date, $paid: Boolean, $paid_date: Date, $alert: Boolean) {
    updateBill(id: $id, user_id: $user_id, bill_category_id: $bill_category_id, description: $description, amount: $amount, due_date: $due_date, paid: $paid, paid_date: $paid_date, alert: $alert) {
      id
    }
  }`;

const DELETE_BILL = gql`
  mutation deleteBill($id: Int!) {
    deleteBill(id: $id)
  }`;

const CREATE_BILL_CATEGORY = gql`
  mutation createBillCategory($name: String!, $user_id: Int!) {
    createBillCategory(name: $name, user_id: $user_id) {
      id
    }
  }`;

const GOALS_QUERY = gql`
  query GOALS_QUERY($user_id: Int!) {
    getGoals(user_id: $user_id) {
      id
      user_id
      description
      amount
      is_budget
      start_date
      end_date
      goal_progress {
        amount
        date
      }
      goal_categories {
        name
      }
      goal_accounts {
        accounts [
          bank_name
          type
          current_balance
        ]
      }
  }
`

export {
  TRANS_ACC_QUERY,
  UPDATE_TRANSACTIONS,
  CREATE_TRANSACTION,
  NEW_BANK,
  DASH_QUERY,
  BILLS_QUERY,
  UPDATE_BILL,
  DELETE_BILL,
  CREATE_BILL,
  CREATE_BILL_CATEGORY,
  GOALS_QUERY
};
