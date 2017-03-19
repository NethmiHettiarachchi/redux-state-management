import { combineReducers } from 'redux';
import { todosReducer} from './todos';
import { visibilityFilter } from './visibilityFilter';

const rootReducer = combineReducers({
  todosReducer,
  visibilityFilter
});

export default rootReducer;
