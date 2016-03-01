var React = require('react');

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      monthNames: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
    };
  },
  render: function() {
    return (
      <div className="nav">
        <div className="nav-button left">&lt;</div>
        <span>{this.state.monthNames[this.props.month]}</span>
        <div className="nav-button right">&gt;</div>
      </div>
    );
  }
});

module.exports = Navigation;
