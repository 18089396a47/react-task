var getDates = require('./get-dates');
var DAY_COUNT = require('../constants').DAY_COUNT;
var WEEK_LENGTH = require('../constants').WEEK_LENGTH;
var DATE_TYPE = require('../constants').DATE_TYPE;

module.exports = function(curMonth, selectedDate) {
  var year = curMonth[0].getFullYear();
  var month = curMonth[0].getMonth();
  var firstDay = curMonth[0].getDay();
  var prevMonth = getDates(
    new Date(year, month, 1 - firstDay),
    new Date(year, month, 0)
  );
  var nextMonth = getDates(
    new Date(year, month + 1, 1),
    new Date(year, month + 1, DAY_COUNT - curMonth.length - prevMonth.length)
  );
  prevMonth.forEach(function(day) {
    day.current = DATE_TYPE.NOT_CURRENT;
  });
  nextMonth.forEach(function(day, i) {
    day.current = DATE_TYPE.NOT_CURRENT;
  });
  curMonth.forEach(function(day, i) {
    if (!selectedDate || selectedDate <= day) {
      day.current = DATE_TYPE.CURRENT;
    } else {
      day.current = DATE_TYPE.DISABLED_CURRENT;
    }
  });
  var all = prevMonth.concat(curMonth.concat(nextMonth));
  var weeks = [];
  for (var i = 0; i < WEEK_LENGTH; i++) {
    weeks.push(all.slice(i * WEEK_LENGTH, (i + 1) * WEEK_LENGTH));
  }
  return weeks;
}
