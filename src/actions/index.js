let nextTodoId = 0;
const ADD_TODO = 'addToDo';
const SET_VISIBILITY_FILTER = 'setVisibilityFilter';
const TOGGLE_TODO = 'toggleToDo';

const addTodoAction = (text) => {
  console.log('action add to do hits');
  console.log(text);
  let val = { id: nextTodoId++, text: text};
  return { type: ADD_TODO, value: val };
};

const setVisibilityFilter = (filter) => {
  console.log('set visibility filter hits  ' + filter);
  return {type: SET_VISIBILITY_FILTER, value: filter};
};

const toggleTodo = (id) => {
  console.log('toggle to do hits   ' + id);
  return {type: TOGGLE_TODO, value: id};
};

module.exports = {
  addTodoAction,
  setVisibilityFilter,
  toggleTodo,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO
};
