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
      let todoObj = Object.assign({}, state);
      let todoAry = todoObj.todos.concat([todo]);
      console.log('====== next state ======');
      console.log(Object.assign({}, state, {todos: todoAry}));
      return Object.assign({}, state, {todos: todoAry});
    }
    case TOGGLE_TODO: {
      console.log('====== state now ======');
      console.log(state);
      deepFreeze(state);
      let todoAry = Object.assign([], state.todos);

      todoAry =  todoAry.map(todo => {
        if (todo.id !== action.value) {
          return todo;
        }
        return Object.assign({}, todo, {completed: !todo.completed});
      });
      let nextState = Object.assign({}, state, {todos: todoAry});
      console.log('====== next state ======');
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
