var React = require('react');
var Navigation = require('./navigation');
var TBody = require('./tbody')

var Table = React.createClass({
  render: function() {
    return ( < div className = "table" >
      < Navigation month={this.props.date.getMonth()} year={this.props.date.getFullYear()} / >
      < table >
      < thead >
      < tr >
      < th > SUN < / th >< th > MON < /th >< th > TUE <
      /th >< th > WED < /
      th >< th > THU < /th > < th > FRI < /th >< th > SAT <
      /th >< /
      tr >< /thead >< TBody date={this.props.date} daySelect={this.props.daySelect} / >< /table >
      < /div >
    );
  }
});

module.exports = Table;
