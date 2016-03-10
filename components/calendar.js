var React = require('react');
var DateInput = require('./date-input');
var Table = require('./month');
var classNames = require('classnames');

var Calendar = React.createClass({
  clickSlide: function(that, e) {
    if (that.refs.navLeft !== e.target && that.refs.navRight !== e.target) {
      return;
    }
    var year = this.state.date.getFullYear();
    var month = this.state.date.getMonth();
    this.setState({
      date: new Date(
        year,
        that.refs.navLeft === e.target ? month - 1 : month + 1,
        1
      ),
      isSlided: true
    });
  },
  getInitialState: function() {
    return {
      date: this.props.startDay || new Date(),
      isSlided: false
    };
  },
  render: function() {
    return (
      <div>
        <DateInput day={this.props.day} />
        <Table
          initDate={this.props.initDate}
          date={this.state.date}
          startDay={this.props.startDay}
          daySelect={this.props.daySelect}
          isSlided={this.state.isSlided}
          clickSlide={this.clickSlide}
        />
      </div>);
    }
});

module.exports = Calendar;
