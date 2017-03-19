let nextTodoId = 0;
const ADD_TODO = 'addToDo';
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

module.exports = {
  addTodoAction,
  toggleTodo,
  ADD_TODO,
  TOGGLE_TODO
};
