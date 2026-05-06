console.log("Hello World")
let addTask = document.querySelector<HTMLDivElement>(".add-task")
let userTasks:string[] = JSON.parse(localStorage.getItem("task-storage") || "[]")
let todayTasks = document.querySelector<HTMLDivElement>("#today-container")
let newTask:HTMLInputElement | null = null

addTask?.addEventListener("click", function(){
    newTask = document.createElement("input")
    newTask.id = "user-tasks"
    todayTasks?.appendChild(newTask)
    console.log('oi')
    taskCreation()
})

console.log(userTasks)

userTasks.forEach((tasks) => {
    let listTask:HTMLLIElement = document.createElement("li")
    listTask.textContent = tasks!
    todayTasks?.appendChild(listTask)
});

function taskCreation(){
    newTask?.addEventListener("keydown", function(e: KeyboardEvent){
        if(e.key === "Enter"){
            userTasks.push(newTask!.value)
            console.log(userTasks)
            storeTask()
            let newlyCreated:HTMLLIElement = document.createElement("li")
            newlyCreated.textContent = newTask!.value
            todayTasks?.appendChild(newlyCreated)
            newTask!.remove()
        }
    })

    newTask?.addEventListener("blur", function(){
        newTask!.value = ""
    })
    //create an input and append it to the container thing
}

function storeTask(){
    localStorage.setItem("task-storage", JSON.stringify(userTasks))
}

