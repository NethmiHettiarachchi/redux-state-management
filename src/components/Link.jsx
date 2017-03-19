import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
const { func, string } = React.PropTypes;


const mapDispatchToProps = (dispatch) => ({
  onClick: (filter) => {
    dispatch(setVisibilityFilter(filter));
  }
});

const connector = connect(null, mapDispatchToProps);

const LinkTo = ({
  filter,
  onClick
}) => {

  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {filter}
    </a>
  );
};

LinkTo.propTypes = {
  onClick: func,
  filter: string
};

export default connector(LinkTo);
