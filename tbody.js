var React = require('react');
var GetDates = require('./getdates');
var GetWeeks = require('./getweeks');
var classNames = require('classnames');

var TBody = React.createClass({
  daySelect: function(key, e) {
    if (key.current === 'true') {
      this.props.daySelect(key, e);
    }
    e.stopPropagation();
  },
  render: function() {
    var date = this.props.date;
    var dates = GetDates(
      new Date(date.getFullYear(), date.getMonth(), 1),
      new Date(date.getFullYear(), date.getMonth() + 1, 0)
    );
    var weeks = GetWeeks(dates, this.props.startDay);
    return (
      <tbody>
        {weeks.map(function(week) {
          return (
            <tr>
              {week.map(function(day) {
                var dayStyle = classNames({
                  'current-month': day.current === 'true',
                  'disabled-day': day.current === 'disabled'
              });
                return (
                  <td className={dayStyle} key={day}>
                    <span onClick={this.daySelect.bind(this, day)}>{day.getDate()}</span>
                  </td>
                );
              }, this)
              }
            </tr>
          );
        }, this)
        }
      </tbody>
    );
  }
});

module.exports = TBody;
