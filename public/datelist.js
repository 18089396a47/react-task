var React = require('react');

var DateList = React.createClass({
  render: function() {
    return (
      <ul className="date-list">
        {this.props.intervals.map(function(interval) {
          return (
            <li key={Math.random()}>{`
              ${interval.start.toLocaleString('ru', {day:'numeric',month:'numeric',year:'numeric'})} -
              ${interval.end.toLocaleString('ru', {day:'numeric',month:'numeric',year:'numeric'})}
            `}</li>
          );
        })}
      </ul>
    );
  }
});

module.exports = DateList;
