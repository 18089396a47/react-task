var React = require('react');
var ReactDOM = require('react-dom');
var Calendar = require('./components/calendar');
var DateList = require('./components/datelist');
var classNames = require('classnames');
require('./styles/reset.css');
require('./styles/calendar.css');

var DatePicker = React.createClass({
  getInitialState: function() {
    return {
      startDate: undefined,
      endDate: undefined,
      isHidden: true,
      intervals: []
    };
  },
  clickStartDate: function(key, e) {
    if (this.state.isHidden) {
      this.setState({startDate: key, isHidden: false});
    }
  },
  clickEndDate: function(key, e) {
    if (!this.state.isHidden) {
      this.setState({endDate: key}, this.endSelection);
    }
  },
  endSelection: function() {
    this.state.intervals.push({
      start: this.state.startDate,
      end: this.state.endDate
    });
    this.setState({startDate: null, endDate: null, isHidden: true});
  },
  render: function() {
    return (
      <div>
        <div className="calendar" ref="startCalendar">
          <Calendar
            daySelect={this.clickStartDate}
            initDate={this.state.initDate}
            day={this.state.startDate}
          />
        </div>
        {!this.state.isHidden ?
          <div className="calendar" ref="endCalendar">
            <Calendar
              daySelect={this.clickEndDate}
              initDate={this.state.startDate}
              day={this.state.endDate}
              startDay={this.state.startDate}
            />
          </div> :
          null
        }
        <DateList intervals={this.state.intervals} />
      </div>
    );
  }
});

ReactDOM.render( <DatePicker /> , document.getElementById('calendar'));
