// add current date

var today = moment().format("dddd, MMMM do");

$("#currentDay").text(today)


// add time for each slot using moment.js
var time = p.attr("data-time");
var displayTime = parseInt(time);

//add styling to time block if past, present or future

var currentTime = moment().format("HH")
//hourBlock seems to only display last time block 5 pm, but styling wont apply regardless to textarea

// $('.hour').each(function(index, value) {    
  
// if (hourBlock < currentTime){
//     $(".description").addClass("past");
// }else if (hourBlock === currentTime){
//     $(".description").addClass("present")
// }else if (hourBlock > currentTime){
//     $(".description").addClass("future")
// }

// })



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



