const React = require('react');

const Landing = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

const { func, string } = React.PropTypes;

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
};

module.exports = Landing;
