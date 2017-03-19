import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';

const mapStateToProps = (state) => ({
  todos: state.todosReducer.todos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const TodoList = ({
  todos,
  onTodoClick
}) => {
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          onTodoClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  );
};

const {arrayOf, object, func } = React.PropTypes;

TodoList.propTypes = {
  todos: arrayOf(object),
  onTodoClick: func
};

export default connector(TodoList);
