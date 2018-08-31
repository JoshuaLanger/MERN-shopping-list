import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

// Meeting place for all reducers

export default combineReducers({
  item: itemReducer
});
