var React = require('react');
var Navigation = require('./navigation');
var TableBody = require('./table-body');
var DAY_NAMES = require('../constants').DAY_NAMES;

var Table = React.createClass({
  render: function() {
    var initDate = this.props.date;
    return (
      <div className = "table">
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
          <TableBody date={initDate} startDay={this.props.startDay} daySelect={this.props.daySelect} />
        </table>
      </div>
    );
  }
});

module.exports = Table;
