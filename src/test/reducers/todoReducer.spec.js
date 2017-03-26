/* eslint-env mocha */
import {todosReducer} from '../../reducers/todos';
import {ADD_TODO, TOGGLE_TODO} from '../../actions/index';
import deepFreeze from 'deep-freeze';

import { expect } from 'chai';

let initialState = {
  todos: []
};

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todosReducer(undefined, {})
    ).to.deep.equal(initialState);
  });

  it('should handle ADD_TODO', () => {
    deepFreeze(initialState);
    let newState = todosReducer(initialState, {
      type: ADD_TODO,
      value: {
        text: 'Run the tests',
        id: 0
      }
    });
    let nextState = {
      todos: [{
        text: 'Run the tests',
        completed: false,
        id: 0
      }]
    };
    expect(newState).to.deep.equal(nextState);
    let state = {todos: [
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ]};
    deepFreeze(state);
    expect(todosReducer(state, {
      type: ADD_TODO,
      value: {
        text: 'Use Redux',
        id: 1
      }
    })
    ).to.deep.equal({
      todos: [
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      ]
    });
    let state2 = {todos: [
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ]};
    deepFreeze(state2);
    expect(
      todosReducer(state2, {
        type: ADD_TODO,
        value: {
          text: 'Fix the tests',
          id: 2
        }
      })
    ).to.deep.equal({todos:
    [ { completed: false, id: 0, text: 'Run the tests' },
        { completed: false, id: 1, text: 'Use Redux' },
        { completed: false, id: 2, text: 'Fix the tests' } ] });
  });
  it('should handle TOGGLE_TODO', () => {
    let state3 = { todos:
    [ { completed: false, id: 0, text: 'Run the tests' },
        { completed: false, id: 1, text: 'Use Redux' } ] };
    let expectState = { todos:
    [ { completed: false, id: 0, text: 'Run the tests' },
        { completed: true, id: 1, text: 'Use Redux' } ] };

    deepFreeze(state3);
    expect(todosReducer(state3, {
      type: TOGGLE_TODO,
      value: 1
    })
    ).to.deep.equal(expectState);
  });
});
