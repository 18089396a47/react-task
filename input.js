var React = require('react');

var Input = React.createClass({
  render: function() {
    var dayStr = '';
    if (this.props.day) {
      dayStr = this.props.day.getDate() + '.' + (this.props.day.getMonth() + 1) + '.' + this.props.day.getFullYear()
    }
    return ( < input type = "text" readOnly
      value={dayStr} / > );
  }
});

module.exports = Input;
