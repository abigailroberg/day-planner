// load page function 
const load = function() {
    checkTimes()
}

// function to update task column text 
$(".task-area").on("click", function () {
    let taskText = $(this).children("p").text().trim()
    
    let taskInput = $("<textarea>").addClass("col-8").val(taskText)

    $(this).replaceWith(taskInput)   
})

// function to add past, present, or future classes to time blocks
const checkTimes = function() {
    let currentHr = moment().format('HH')
    for(var i=9; i<18; i++) {
        let idName = i+"-time"

        if(currentHr-i === 0) {
            $(`#${idName}`).addClass('present')
        } else if (currentHr-i > 0) {
            $(`#${idName}`).addClass('past')
        } else {
            $(`#${idName}`).addClass('future')
        }
    }
}

load()