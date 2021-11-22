let tasks = {}

// load page function 
const load = function() {
    checkTimes()
    loadTasks()
}

// function to update task column text 
$(".task-area").on("click", function () {
    let taskText = $(this).children("p").text().trim()
    
    let taskInput = $("<textarea>").addClass("col-8").val(taskText)

    $(this).replaceWith(taskInput)
})

// function to add past, present, or future classes to time blocks
const checkTimes = function() {
    // get 24 hour time from moment
    let currentHr = moment().format('HH')
    // loop over all hours included
    for(var i=9; i<18; i++) {
        // create variable to hold id name of each hours box
        let idName = i+"-time"

        // compare current hour to each hour included & set class accordingly
        if(currentHr-i === 0) {
            $(`#${idName}`).addClass('present')
        } else if (currentHr-i > 0) {
            $(`#${idName}`).addClass('past')
        } else {
            $(`#${idName}`).addClass('future')
        }
    }
}

// function to load saved tasks
const loadTasks = function() {
    // retrieve saved tasks from local storage
    tasks = JSON.parse(localStorage.getItem("tasks"))

    // if none, create new task object
    if (!tasks) {
        // task object holds string for each hour
        tasks = {
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: ""
        }
    }

    // loop through task object & update text on page to match
    for(const task in tasks) {
        $(`#${task}-time`).text(tasks[task])
    }
}
// function to save tasks in local storage
const saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// save hourly tasks when button clicked
$(".save").on("click", function() {
    // get id of task to save
    const taskId = $(this).attr('id').split('-')[0]
    console.log(taskId)

    let taskText = $(`#${taskId}-time`).text().trim()

    console.log(taskText)
})

load()