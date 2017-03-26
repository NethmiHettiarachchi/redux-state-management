import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/index';
const { func } = React.PropTypes;

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (id) => {
      dispatch(addTodoAction(id));
    }
  };
};

const connector = connect(null, mapDispatchToProps);

const AddTodo = ({
  addTodo
}) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        addTodo(input.value);
        input.value = '';
      }}>
        <input ref={node => {
          input = node;
        }} />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  addTodo: func
};

export default connector(AddTodo);
