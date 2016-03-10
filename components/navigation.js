var React = require('react');
var MONTH_NAMES = require('../constants').MONTH_NAMES;

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      monthNames: MONTH_NAMES
    };
  },
  clickSlide: function(e) {
    this.props.clickSlide(this, e);
  },
  render: function() {
    return (
      <div className="nav">
        <div className="nav-button left" ref="navLeft" onClick={this.clickSlide}>&lt;</div>
        <span className="nav-month">{`
          ${this.state.monthNames[this.props.month]}, ${this.props.year}
        `.trim()}</span>
        <div className="nav-button right" ref="navRight" onClick={this.clickSlide}>&gt;</div>
      </div>
    );
  }
});

module.exports = Navigation;
