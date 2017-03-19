/* eslint-env mocha */
import {addTodoAction}  from '../../actions/index';
import {ADD_TODO}  from '../../actions/index';

import { expect } from 'chai';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    let expectedObj = {
      type: ADD_TODO,
      value: {
        id: 0,
        text: 'Use Redux'
      }
    };
    expect(addTodoAction('Use Redux')).to.deep.equal(expectedObj);
  });
});
