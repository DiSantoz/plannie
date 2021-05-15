// add current date

var today = moment().format("dddd, MMMM do");

$("#currentDay").text(today)

// add time for each slot using moment.js
var hourBlock = moment("9", "H a").format("H a");

$("#firstBlock").text(hourBlock)

var hourBlock = moment("10", "H a").format("H a");

$("#secondBlock").text(hourBlock)

var hourBlock = moment("11", "H a").format("H a");

$("#thirdBlock").text(hourBlock)

var hourBlock = moment("12", "H a").format("H a");

$("#fourthBlock").text(hourBlock)

var hourBlock = moment("13", "h a").format("h a");

$("#fifthBlock").text(hourBlock)

var hourBlock = moment("14", "h a").format("h a");

$("#sixthBlock").text(hourBlock)

var hourBlock = moment("15", "h a").format("h a");

$("#seventhBlock").text(hourBlock)

var hourBlock = moment("16", "h a").format("h a");

$("#eighthBlock").text(hourBlock)

var hourBlock = moment("17", "h a").format("h a");

$("#ninthBlock").text(hourBlock)

// grab value of user text from planner

$(".saveBtn").on("click", function () {
    var timeInput = $(this).parent().prev().prev().children("p").text()
    var textInput = $(this).parent().prev().children("textarea").val()

    console.log(timeInput);
    console.log(textInput);

    // if time and text both have values then save to localStorage 
    if (timeInput && textInput) {
        localStorage.setItem(timeInput, textInput);
    }

})
//retrieve all saved data
$(function () {
    $('#to-do-1').text(localStorage.getItem('9 am'))
    $('#to-do-2').text(localStorage.getItem('10 am'))
    $('#to-do-3').text(localStorage.getItem('11 am'))
    $('#to-do-4').text(localStorage.getItem('12 pm'))
    $('#to-do-5').text(localStorage.getItem('1 pm'))
    $('#to-do-6').text(localStorage.getItem('2 pm'))
    $('#to-do-7').text(localStorage.getItem('3 pm'))
    $('#to-do-8').text(localStorage.getItem('4 pm'))
    $('#to-do-9').text(localStorage.getItem('5 pm'))
})



