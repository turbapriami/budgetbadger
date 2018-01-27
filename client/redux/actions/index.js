import {
  RENDER_TRANSACTIONS
} from './types';

const API_URL = 'http://localhost:1337/graphql';

export function getTransactions (user_id) {
  const query1 = JSON.stringify({query: '{getTransactions(user_id: 1){id, amount, name, account { id, type, bank_name } category { name }}'})
  return (dispatch) => {
    axios.post(API_URL, )
  }
}