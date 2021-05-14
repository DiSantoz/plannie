// add current date

var today = moment().format("dddd, MMMM do");

$("#currentDay").text(today)

// grab value of user text from planner

    $(".saveBtn").on("click", function(){
        var textInput = $(".description").val()
        
        console.log(textInput);
})


