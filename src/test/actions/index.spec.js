/* eslint-env mocha */
import {addTodoAction,
  setVisibilityFilter,
  toggleTodo}  from '../../actions/index';
import {ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO}  from '../../actions/index';

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

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(setVisibilityFilter('active')).to.deep.equal({
      type: SET_VISIBILITY_FILTER,
      value: 'active'
    });
  });

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(toggleTodo(1)).to.deep.equal({
      type: TOGGLE_TODO,
      value: 1
    });
  });
});
