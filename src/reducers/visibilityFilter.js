import { SET_VISIBILITY_FILTER } from '../actions/index';
import deepFreeze from 'deep-freeze';

const initialState = {
  SHOW_ALL: true,
  SHOW_ACTIVE: false,
  SHOW_COMPLETED: false
};
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      deepFreeze(state);
      console.log('====== state now ======');
      console.log(state);
      if (action.value === 'SHOW_ALL') {
        console.log('====== next state ======');
        console.log(Object.assign({}, state, {SHOW_ALL: true, SHOW_ACTIVE: false, SHOW_COMPLETED: false}));
        return Object.assign({}, state, {SHOW_ALL: true, SHOW_ACTIVE: false, SHOW_COMPLETED: false});
      } else if (action.value === 'SHOW_ACTIVE') {
        console.log('====== next state ======');
        console.log(Object.assign({}, state, {SHOW_ALL: false, SHOW_ACTIVE: true, SHOW_COMPLETED: false}));
        return Object.assign({}, state, {SHOW_ALL: false, SHOW_ACTIVE: true, SHOW_COMPLETED: false});
      } else {
        console.log('====== next state ======');
        console.log(Object.assign({}, state, {SHOW_ALL: false, SHOW_ACTIVE: false, SHOW_COMPLETED: true}));
        return Object.assign({}, state, {SHOW_ALL: false, SHOW_ACTIVE: false, SHOW_COMPLETED: true});
      }
    }
    default:
      return state;
  }
};
module.exports = {visibilityFilter};
