import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  todos: state.todosReducer.todos,
});

const connector = connect(mapStateToProps, null);

const TodoList = ({
  todos,
}) => {
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
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
