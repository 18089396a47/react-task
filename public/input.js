var React = require('react');

var Input = React.createClass({
  render: function() {
    var dayStr = '';
    if (this.props.day) {
      dayStr = this.props.day.toLocaleString('ru', {day:'numeric',month:'numeric',year:'numeric'});
    }
    return ( < input type = "text" readOnly value={dayStr} / > );
  }
});

module.exports = Input;
