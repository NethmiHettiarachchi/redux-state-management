let nextTodoId = 0;
const ADD_TODO = 'addToDo';
const SET_VISIBILITY_FILTER = 'setVisibilityFilter';
const TOGGLE_TODO = 'toggleToDo';

const addTodoAction = (text) => {
  let val = { id: nextTodoId++, text: text};
  console.log('----- dispatching an action -----');
  console.log({ type: ADD_TODO, value: val });
  return { type: ADD_TODO, value: val };
};

const toggleTodo = (id) => {
  console.log('----- dispatching an action -----');
  console.log({type: TOGGLE_TODO, value: id});
  return {type: TOGGLE_TODO, value: id};
};

const setVisibilityFilter = (filter) => {
  console.log('----- dispatching an action -----');
  console.log({type: TOGGLE_TODO, value: filter});
  return {type: SET_VISIBILITY_FILTER, value: filter};
};

module.exports = {
  addTodoAction,
  setVisibilityFilter,
  toggleTodo,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO
};
