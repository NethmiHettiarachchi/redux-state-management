/* eslint-env mocha */
import {todosReducer} from '../../reducers/todos';
import {ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO}  from '../../actions/index';

import { expect } from 'chai';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todosReducer(undefined, {})
    ).to.deep.equal({todos: []});
  });

  it('should handle ADD_TODO', () => {
    expect(
      todosReducer({todos: []}, {
        type: ADD_TODO,
        value:{
          text: 'Run the tests',
          id: 0
        }
      })
    ).to.deep.equal({todos: [{
      text: 'Run the tests',
      completed: false,
      id: 0
    }]});
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

  xit('should handle TOGGLE_TODO', () => {
    expect(
      todosReducer({todos:[
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ]}, {
        type: TOGGLE_TODO,
        value: 1
      })
    ).to.deep.equal({toods: [
         {
            completed: true,
          id: 1,
          text: "Run the tests"
        },
        {
          completed: false,
          id: 0,
         text: "Use Redux"
        }
    ]});
  });
});
