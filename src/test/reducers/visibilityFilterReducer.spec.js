/* eslint-env mocha */
import {visibilityFilter} from '../../reducers/visibilityFilter';
import {SET_VISIBILITY_FILTER} from '../../actions/index';
import deepFreeze from 'deep-freeze';

import { expect } from 'chai';
const initialState = {
  SHOW_ALL: true,
  SHOW_ACTIVE: false,
  SHOW_COMPLETED: false
};

describe('visibility filter reducer', () => {
  it('should handle initial state', () => {
    expect(visibilityFilter(undefined, {})).to.deep.equal(initialState);
  });
  let expectState = {
    SHOW_ALL: false,
    SHOW_ACTIVE: true,
    SHOW_COMPLETED: false
  };
  it('should handle setting filter', () => {
    let state = {SHOW_ALL: true,
      SHOW_ACTIVE: false,
      SHOW_COMPLETED: false};
    deepFreeze(state);
    expect(visibilityFilter(state, {
      type: SET_VISIBILITY_FILTER,
      value: 'SHOW_ACTIVE'
    })).to.deep.equal(expectState);
  });
});
