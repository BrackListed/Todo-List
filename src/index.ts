console.log("Hello World")
let addTask = document.querySelector<HTMLDivElement>(".add-task")
let userTasks:string[] = JSON.parse(localStorage.getItem("task-storage") || "[]")
let todayTasks = document.querySelector<HTMLDivElement>("#today-container")
let newTask:HTMLInputElement | null = null
let taskPlaceholder = document.getElementById("task-placeholder") as HTMLLIElement
let taskinProgress:boolean = false

if(userTasks.length > 0){
    taskPlaceholder.remove()
} else{

}


addTask?.addEventListener("click", function(){
    if(taskinProgress === true){
        alert("Finish writing your current task first!")
    } else{
        newTask = document.createElement("input")
        newTask.id = "user-tasks"
        todayTasks?.appendChild(newTask)
        taskCreation()
        taskinProgress = true
    }
})


userTasks.forEach((tasks) => {
    let listTask:HTMLLIElement = document.createElement("li")
    listTask.textContent = tasks!
    todayTasks?.appendChild(listTask)
});

function taskCreation(){
    newTask?.addEventListener("keydown", function(e: KeyboardEvent){
        if(e.key === "Enter"){
            userTasks.push(newTask!.value)
            storeTask()
            let newlyCreated:HTMLLIElement = document.createElement("li")
            newlyCreated.textContent = newTask!.value
            todayTasks?.appendChild(newlyCreated)
            newTask!.remove()
            taskPlaceholder.remove()
            taskinProgress = false
        }
    })

    newTask?.addEventListener("blur", function(){
        newTask!.value = ""
    })
}

function storeTask(){
    localStorage.setItem("task-storage", JSON.stringify(userTasks))
}

