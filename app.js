var React = require('react');
var ReactDOM = require('react-dom');
var Calendar = require('./calendar').Calendar;

var Date = React.createClass({
  getInitialState: function() {
    return {
      startDate: undefined
    };
  },
  clickStartDate: function(key, e) {
    this.setState({startDate: key});
  },
  render: function() {
    return (
      < div >
        <div>
          < Calendar class = "visible" daySelect={this.clickStartDate} day={this.state.startDate} / >
        </div>
        <div>
          < Calendar class = "hidden" / >
        </div>
      < /div>
    );
  }
});

ReactDOM.render( < Date / > , document.getElementById('calendar'));
