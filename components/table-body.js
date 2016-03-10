var React = require('react');
var getDates = require('../utils/get-dates');
var getWeeks = require('../utils/get-weeks');
var classNames = require('classnames');
var DATE_TYPE = require('../constants').DATE_TYPE;

var TableBody = React.createClass({
  daySelect: function(key, e) {
    if (key.current === DATE_TYPE.CURRENT) {
      this.props.daySelect(key, e);
    }
  },
  render: function() {
    var date = this.props.date;
    var dates = getDates(
      new Date(date.getFullYear(), date.getMonth(), 1),
      new Date(date.getFullYear(), date.getMonth() + 1, 0)
    );
    var weeks = getWeeks(dates, this.props.startDay);
    return (
      <tbody>
        {weeks.map(function(week) {
          return (
            <tr key={week}>
              {week.map(function(day) {
                var dayStyle = classNames({
                  'current-month': day.current === DATE_TYPE.CURRENT,
                  'disabled-day': day.current === DATE_TYPE.DISABLED_CURRENT
                });

                return (
                  <td className={dayStyle} key={day.getTime()}>
                    <span className="day" onClick={this.daySelect.bind(this, day)}>{day.getDate()}</span>
                  </td>
                );
              }, this)}
            </tr>
          );
        }, this)}
      </tbody>
    );
  }
});

module.exports = TableBody;
