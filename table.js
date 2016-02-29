var React = require('react');

var Table = React.createClass({
  render: function() {
    return ( < table >
      < thead >
      < tr >
      < th > MON < /th> < th > TUE < /th > < th > WED < /th> < th >
      THU < /th >  < th > FRI < /th > < th > SAT <
      /th >  < th > SAN < /
      th > < / tr >  < /thead > < /table >
    );
  }
});

module.exports = Table;
