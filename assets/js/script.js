// add current date

var today = moment().format("dddd, MMMM do");

$("#currentDay").text(today)

// task text was clicked
$("#task").click(function() {

  $(this).text("test");

  });