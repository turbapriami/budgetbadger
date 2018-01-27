import { combineReducers } from 'redux';  
import transactions from './transactions.js';

const rootReducer = combineReducers({
  transactions
})

export default rootReducer