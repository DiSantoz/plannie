// add current date

var today = moment().format("dddd, MMMM do");

$("#currentDay").text(today)

// add current time
var currentTime = moment().hours()

// verify if current time is past, present, or future

var currentHour = parseInt(currentTime);

//add styling to time block if past, present or future

$('.time-block').each(function () {

    var compareTime = parseInt($(this).attr('id'))

    if (compareTime < currentHour) {
        $(this).addClass("past");
    } else if (compareTime === currentHour) {
        $(this).removeClass("past")
        $(this).addClass("present")
    } else if (compareTime > currentHour) {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
    }

})



// grab value of user text from planner

$(".saveBtn").on("click", function () {
    var timeInput = $(this).parent().prev().prev().children("p").text()
    var textInput = $(this).parent().prev().children("textarea").val()

    // console.log(timeInput);
    // console.log(textInput);

    // if time and text both have values then save to localStorage 
    if (timeInput && textInput) {
        localStorage.setItem(timeInput, textInput);
    }

})
//retrieve all saved data
$(function () {
    $('#to-do-1').text(localStorage.getItem('9AM'))
    $('#to-do-2').text(localStorage.getItem('10AM'))
    $('#to-do-3').text(localStorage.getItem('11AM'))
    $('#to-do-4').text(localStorage.getItem('12PM'))
    $('#to-do-5').text(localStorage.getItem('1PM'))
    $('#to-do-6').text(localStorage.getItem('2PM'))
    $('#to-do-7').text(localStorage.getItem('3PM'))
    $('#to-do-8').text(localStorage.getItem('4PM'))
    $('#to-do-9').text(localStorage.getItem('5PM'))
})