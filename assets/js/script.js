// function to update task column text 
$(".task-area").on("click", function () {
    let taskText = $(this).children("p").text().trim()
    
    let taskInput = $("<textarea>").addClass("col-8 task-area").val(taskText)

    $(this).replaceWith(taskInput)   
})