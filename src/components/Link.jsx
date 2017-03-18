import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
const { func } = React.PropTypes;


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const connector = connect(null, mapDispatchToProps);

const LinkTo = ({
  children,
  onClick
}) => {

  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

LinkTo.propTypes = {
  onClick: func.isRequired
};

export default connector(LinkTo);
