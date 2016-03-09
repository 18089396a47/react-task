var React = require('react');
var MONTH_NAMES = require('../constants').MONTH_NAMES;

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      monthNames: MONTH_NAMES
    };
  },
  render: function() {
    return (
      <div className="nav">
        <div className="nav-button left">&lt;</div>
        <span className="nav-month">{`
          ${this.state.monthNames[this.props.month]}, ${this.props.year}
        `}</span>
        <div className="nav-button right">&gt;</div>
      </div>
    );
  }
});

module.exports = Navigation;
