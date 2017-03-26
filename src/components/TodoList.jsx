import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';

const mapStateToProps = (state) => ({
  todos: state.todosReducer.todos,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const getToDos = (todos, visibilityFilter) => {
  if (visibilityFilter.SHOW_ALL) return todos;
  else if (visibilityFilter.SHOW_ACTIVE) return todos.filter((todo) => { return !todo.completed; });
  else if (visibilityFilter.SHOW_COMPLETED) return todos.filter((todo) => { return todo.completed; });
  else return todos;
};

const TodoList = ({
  todos,
  onTodoClick,
  visibilityFilter
}) => {
  let todosToShow = getToDos(todos, visibilityFilter);
  return (
    <ul>
      {todosToShow.map(todo =>
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
