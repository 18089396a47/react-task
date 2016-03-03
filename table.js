var React = require('react');
var Navigation = require('./navigation');
var TBody = require('./tbody')

var Table = React.createClass({
  getInitialState: function() {
    return {
      initDate: false
    };
  },
  render: function() {
    var initDate;
    if (this.props.startDay) {
      if (!this.state.initDate) {
        if (this.props.initDate) {
          initDate = this.props.initDate;
          this.state.initDate = true;
        } else {
          initDate = this.props.date;
        }
      } else {
        initDate = this.props.date;
      }
    } else {
      initDate = this.props.date;
      this.state.initDate = false;
    }
    return ( < div className = "table" >
        < Navigation month={initDate.getMonth()} year={initDate.getFullYear()} / >
        < table >
          < thead >
            < tr >
              < th > SUN < /th >
              < th > MON < /th >
              < th > TUE < /th >
              < th > WED < /th >
              < th > THU < /th >
              < th > FRI < /th >
              < th > SAT < /th >
            < /tr >
          < /thead >
          < TBody date={initDate} startDay={this.props.startDay} daySelect={this.props.daySelect} / >
        < /table >
      < /div >
    );
  }
});

module.exports = Table;
