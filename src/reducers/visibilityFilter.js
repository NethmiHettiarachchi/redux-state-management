import { SET_VISIBILITY_FILTER } from '../actions/index';

const initialState = {
  SHOW_ALL: true,
  SHOW_ACTIVE: false,
  SHOW_COMPLETED: false
};
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      if (action.value === 'SHOW_ALL') {
        console.log(action.value);
        return Object.assign({}, state, {SHOW_ALL: true, SHOW_ACTIVE: false, SHOW_COMPLETED: false});
      } else if (action.value === 'SHOW_ACTIVE') {
        return Object.assign({}, state, {SHOW_ALL: false, SHOW_ACTIVE: true, SHOW_COMPLETED: false});
      } else {
        return Object.assign({}, state, {SHOW_ALL: false, SHOW_ACTIVE: false, SHOW_COMPLETED: true});
      }
    }
    default:
      return state;
  }
};

export default visibilityFilter;
