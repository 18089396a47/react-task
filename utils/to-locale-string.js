module.exports = function(day) {
  return day.toLocaleString('ru', {day:'numeric',month:'numeric',year:'numeric'});
}
