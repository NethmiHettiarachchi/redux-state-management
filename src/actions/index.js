let nextTodoId = 0;
const ADD_TODO = 'addToDo';

const addTodoAction = (text) => {
  let val = { id: nextTodoId++, text: text};
  console.log('----- dispatching an action -----');
  console.log({ type: ADD_TODO, value: val });
  return { type: ADD_TODO, value: val };
};

module.exports = {
  addTodoAction,
  ADD_TODO,
};
