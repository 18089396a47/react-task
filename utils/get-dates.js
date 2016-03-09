require('./date-prototype');

module.exports = function(startDate, stopDate) {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate))
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}
