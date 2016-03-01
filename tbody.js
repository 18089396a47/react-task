var React = require('react');
var GetDates = require('./getdates');
var GetWeeks = require('./getweeks');
var classNames = require('classnames');

var TBody = React.createClass({
  render: function() {
    var date = this.props.date;
    var dates = GetDates(
      new Date(date.getFullYear(), date.getMonth(), 1),
      new Date(date.getFullYear(), date.getMonth() + 1, 0)
    );
    var weeks = GetWeeks(dates);
    return (
      <tbody>
        {weeks.map(function(week) {
          return (
            <tr>
              {week.map(function(day) {
                var dayStyle = classNames({currentMonth: day.current});
                return (
                  <td className={dayStyle}>
                    {day.getDate()}
                  </td>
                );
              })
              }
            </tr>
          );
        })
        }
      </tbody>
    );
  }
});

module.exports = TBody;
