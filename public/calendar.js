var React = require('react');
var Input = require('./input');
var Table = require('./table');
var classNames = require('classnames');

var Calendar = React.createClass({
  clickSlide: function(e) {
    if (e.target.classList.contains('nav-button')) {
      var year = this.state.date.getFullYear(),
        month = this.state.date.getMonth();
      if (e.target.classList.contains('left')) {
        this.setState({date: new Date(year, month - 1, 1)});
      } else {
        this.setState({date: new Date(year, month + 1, 1)});
      }
    }
  },
  getInitialState: function() {
    return {
      date: new Date()
    };
  },
  render: function() {
    var classes = classNames({'hidden': this.props.class}, 'calendar');
    return (
      < div >
        < Input day={this.props.day} / >
        <div onClick={this.clickSlide}>
          < Table initDate={this.props.initDate} date={this.state.date} startDay={this.props.startDay} daySelect={this.props.daySelect} / >
        </div>
      < /div>);
    }
});

module.exports = Calendar;
