// add current date

var today = moment().format("dddd, MMMM do");

$("#currentDay").text(today)

// grab value of user text from planner

    $(".saveBtn").on("click", function(){
        var timeInput = $(this).parent().prev().prev().children("p").text()
        var textInput = $(this).parent().prev().children("textarea").val()
        
        console.log(timeInput);
        console.log(textInput);

// if time and text both have values then save to localStorage
if (timeInput && textInput){
    localStorage.setItem(timeInput, textInput);

}

 })

