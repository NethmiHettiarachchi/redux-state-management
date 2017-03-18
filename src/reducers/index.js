import { combineReducers } from 'redux';
import {todos, todosReducer} from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todosReducer,
  visibilityFilter
});

export default rootReducer;
