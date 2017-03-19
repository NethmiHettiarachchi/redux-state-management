import { ADD_TODO, TOGGLE_TODO } from '../actions/index';
import deepFreeze from 'deep-freeze';
import { sortBy } from 'lodash';

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      deepFreeze(state);
      console.log('====== state now ======');
      console.log(state);
      const {id, text} = action.value;
      let todo = {
        id: id,
        text: text,
        completed: false
      };
      let todoAry = Object.assign([], state.todos);
      todoAry = todoAry.concat([todo]);
      console.log('====== next state ======');
      console.log(Object.assign({}, state, {todos: todoAry}));
      return Object.assign({}, state, {todos: todoAry});
    }
    case TOGGLE_TODO: {
      console.log('====== state now ======');
      console.log(state);
      deepFreeze(state);
      let todoAry = Object.assign([], state.todos);
      let todoObj = todoAry.filter((todo) => todo.id === action.value)[0];
      let newTodoObj = Object.assign({}, todoObj, {completed: !todoObj.completed});
      todoAry = sortBy(todoAry.filter((todo) => todo.id !== action.value).concat([newTodoObj]), 'id');
      console.log('====== next state ======');
      let nextState = Object.assign({}, state, {todos: todoAry});
      console.log(nextState);
      return nextState;
    }
    default:
      return state;
  }
};

module.exports = {
  todosReducer
};