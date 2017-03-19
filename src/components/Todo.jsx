import React from 'react';

const Todo = ({
  todo
}) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
  >
      {todo.text}
    </li>
  );
};

const { object } = React.PropTypes;

Todo.propTypes = {
  todo: object.isRequired
};

export default Todo;
