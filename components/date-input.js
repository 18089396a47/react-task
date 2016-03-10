var React = require('react');
var toLocaleString = require('../utils/to-locale-string');

var DateInput = React.createClass({
  render: function() {
    var dayStr = this.props.day ? toLocaleString(this.props.day) : '';
    return ( <input type="text" readOnly value={dayStr} /> );
  }
});

module.exports = DateInput;
