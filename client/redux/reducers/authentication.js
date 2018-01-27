import { AUTH_USER,  
         UNAUTH_USER,
         AUTH_ERROR } from '../actions/types.js';

const INITIAL_STATE = { errors: '', message: '', content: '', authenticated: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', message: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, error: '', message: '', authenticated: false };
    case AUTH_ERROR:
      return { ..state, error: action.payload };    
  }
  return state;
}