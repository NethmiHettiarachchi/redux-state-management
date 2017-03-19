import { ADD_TODO } from '../actions/index';

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
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
    default:
      return state;
  }
};

module.exports = {
  todosReducer
};
