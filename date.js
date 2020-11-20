//jshint esversion:6

exports.getDate = function () {

  var today = new Date();
  var options = {
  weekday: "long",
  day: "numeric",
  month: "long"};

  return day = today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {

  let today = new Date();

  let options = {
    weekday: "long"
  };

  return day = today.toLocaleDateString("en-US", options);
}
