import React from 'react';

const Todo = ({
  onTodoClick,
  todo
}) => {
  return (
    <li
      onClick={() => onTodoClick(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
  >
      {todo.text}
    </li>
  );
};

const { func, object } = React.PropTypes;

Todo.propTypes = {
  onTodoClick: func.isRequired,
  todo: object.isRequired
};

export default Todo;
