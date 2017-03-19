/* eslint-env mocha */
import {todosReducer} from '../../reducers/todos';
import {ADD_TODO}  from '../../actions/index';
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
    let newState = todosReducer(initialState, {
      type: ADD_TODO,
      value:{
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
    expect(
      todosReducer({todos:[
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ]}, {
        type: ADD_TODO,
        value: {
          text: 'Use Redux',
          id: 1
        }
      })
    ).to.deep.equal({
      todos:[
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

    expect(
      todosReducer({todos:[
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      ]}, {
        type: ADD_TODO,
        value: {
          text: 'Fix the tests',
          id: 2
        }
      })
    ).to.deep.equal({todos:[
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ]});
  });
});
