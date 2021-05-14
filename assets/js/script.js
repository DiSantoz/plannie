// add current date

var today = moment().format("dddd, MMMM do");

$("#currentDay").text(today)

// grab value of user text from planner

    $(".saveBtn").on("click", function(){
        var textInput = $(this).parent().prev().children("textarea").val()
        
        console.log(textInput);
})

//checks if any values in textInput, if none create an array to store values
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("textInput")) || [];

  
 for (var i=0; i< tasks.list; i++){
     $('textInput').append(tasks);
 }
  };
  
  var saveTasks = function() {
    localStorage.setItem("textInput", JSON.stringify(tasks));
  };


