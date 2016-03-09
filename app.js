var React = require('react');
var ReactDOM = require('react-dom');
var Calendar = require('./public/calendar');
var DateList = require('./public/datelist');
require('./styles/reset.css');
require('./styles/calendar.css');

var DatePicker = React.createClass({
  getInitialState: function() {
    return {
      startDate: undefined,
      endDate: undefined,
      intervals: []
    };
  },
  checkDate: function() {
    return true;
  },
  clickStartDate: function(key, e) {
    if (this.isHidden) {
      this.setState({startDate: key});
      ReactDOM.findDOMNode(this.refs.endCalendar).classList.toggle('hidden');
      this.isHidden = !this.isHidden;
    }
  },
  clickEndDate: function(key, e) {
    if (!this.checkDate()) {
      return;
    }
    if (!this.isHidden) {
      this.setState({endDate: key}, this.endSelection);
    }
  },
  endSelection: function() {
    this.state.intervals.push({
      start: this.state.startDate,
      end: this.state.endDate
    });
    this.setState({startDate: null, endDate: null});
    ReactDOM.findDOMNode(this.refs.endCalendar).classList.toggle('hidden');
    this.isHidden = !this.isHidden;
  },
  isHidden: true,
  render: function() {
    return (
      < div >
        <div className="calendar" ref="startCalendar">
          < Calendar daySelect={this.clickStartDate} initDate={this.state.initDate} day={this.state.startDate} / >
        </div>
        <div className="calendar hidden" ref="endCalendar">
          < Calendar daySelect={this.clickEndDate}
            initDate={this.state.startDate}
            day={this.state.endDate}
            startDay={this.state.startDate} / >
        </div>
        <DateList intervals={this.state.intervals} />
      < /div>
    );
  }
});

ReactDOM.render( < DatePicker / > , document.getElementById('calendar'));
