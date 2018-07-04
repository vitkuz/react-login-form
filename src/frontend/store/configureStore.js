import {combineReducers, createStore} from 'redux';
import { user } from '../reducers/user.reducer';
import { alert } from '../reducers/alerts.reducer';

export default () => {
  const store = createStore(combineReducers(
      {
        user,
        alert,
        loggingIn: function () {return false}
      }
  ));
  
  return store;
}