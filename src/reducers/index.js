import { combineReducers } from 'redux';
import testReducer from './testReducer.js';
import test1Reducer from './test1Reducer.js';

const reducer = combineReducers({
  testReducer,
  test1Reducer
});

export default reducer;