var React = require('react');
var Input = require('./input');
var Table = require('./table');
var classNames = require('classnames');
require('./style.css')

var Calendar = React.createClass({
      render: function() {
        var classes = classNames(this.props.class, 'calendar');
        return ( < div className = {
            classes
          } >
          < Input / >
          < Table / >
          < /div>);
        }
      });

    module.exports.Calendar = Calendar;
