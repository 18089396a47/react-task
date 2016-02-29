var React = require('react');
var ReactDOM = require('react-dom');
var Calendar = require('./calendar').Calendar;

var Date = React.createClass({
  render: function() {
    return ( < div >
      < Calendar class = "visible" / >
      < Calendar class = "hidden" / >
      < /div>
    );
  }
});

ReactDOM.render( < Date / > , document.getElementById('calendar'));
