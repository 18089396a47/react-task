var React = require('react');
var Input = require('./input');
var Table = require('./table');
var classNames = require('classnames');
require('./style.css')

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
      e.stopPropagation();
    }
  },
  getInitialState: function() {
    return {
      date: new Date()
    };
  },
  render: function() {
    var classes = classNames(this.props.class, 'calendar');
    return ( < div className = {
        classes
      } >
      < Input day={this.props.day} / >
      <div onClick={this.clickSlide}>
        < Table date={this.state.date} daySelect={this.props.daySelect} / >
      </div>
      < /div>);
    }
});

module.exports.Calendar = Calendar;
