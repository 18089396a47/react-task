var getDates = require('./get-dates');
var DAY_COUNT = require('../constants').DAY_COUNT;

module.exports = function(curMonth, selectedDate) {
  var year = curMonth[0].getFullYear(),
    month = curMonth[0].getMonth(),
    firstDay = curMonth[0].getDay();
  var prevMonth = getDates(
    new Date(year, month, 1 - firstDay),
    new Date(year, month, 0)
  );
  var nextMonth = getDates(
    new Date(year, month + 1, 1),
    new Date(year, month + 1, DAY_COUNT - curMonth.length - prevMonth.length)
  );
  prevMonth.forEach(function(day) {
    day.current = 'false';
  });
  curMonth.forEach(function(day, i) {
    if (!selectedDate) {
      day.current = 'true';
    } else {
      if (selectedDate <= day) {
        day.current = 'true';
      } else {
        day.current = 'disabled';
      }
    }
  });
  nextMonth.forEach(function(day, i) {
    day.current = 'false';
  });
  var all = prevMonth.concat(curMonth.concat(nextMonth));
  var weeks = [
    all.slice(0, 7),
    all.slice(7, 14),
    all.slice(14, 21),
    all.slice(21, 28),
    all.slice(28, 35),
    all.slice(35, 42),
  ];
  return weeks;
}
