var React = require('react');
var toLocaleString = require('../utils/to-locale-string');

var DateList = React.createClass({
  render: function() {
    return (
      <ul className="date-list">
        {this.props.intervals.map(function(interval) {
          return (
            <li key={Math.random()}>{`
              ${toLocaleString(interval.start)} - ${toLocaleString(interval.end)}
            `.trim()}</li>
          );
        })}
      </ul>
    );
  }
});

module.exports = DateList;
