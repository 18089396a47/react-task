var React = require('react');
var toLocaleString = require('../utils/to-locale-string');

var Input = React.createClass({
  render: function() {
    var dayStr = '';
    if (this.props.day) {
      dayStr = toLocaleString(this.props.day);
    }
    return ( <input type="text" readOnly value={dayStr} /> );
  }
});

module.exports = Input;
