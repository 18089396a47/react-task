var React = require('react');

var Navigation = React.createClass({
  render: function() {
    return (
      <div className="nav">
        <div className="nav-button left">&lt;</div>
        <span>March</span>
        <div className="nav-button right">&gt;</div>
      </div>
    );
  }
});

module.exports = Navigation;
