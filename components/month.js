var React = require('react');
var Navigation = require('./navigation');
var MonthDates = require('./month-dates');
var DAY_NAMES = require('../constants').DAY_NAMES;

var Month = React.createClass({
  render: function() {
    var initDate = this.props.date;
    return (
      <div className="month">
        <Navigation
          month={initDate.getMonth()}
          year={initDate.getFullYear()}
          clickSlide={this.props.clickSlide}
        />
        <table>
          <thead>
            <tr>
              {DAY_NAMES.map(function (name) {
                return ( <th key={name}>{name}</th> );
              })}
            </tr>
          </thead>
          <MonthDates date={initDate} startDay={this.props.startDay} daySelect={this.props.daySelect} />
        </table>
      </div>
    );
  }
});

module.exports = Month;
