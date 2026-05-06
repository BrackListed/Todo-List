console.log("Hello World");
let addTask = document.querySelector(".add-task");
let userTasks = JSON.parse(localStorage.getItem("task-storage") || "[]");
let todayTasks = document.querySelector("#today-container");
let newTask = null;
addTask === null || addTask === void 0 ? void 0 : addTask.addEventListener("click", function () {
    newTask = document.createElement("input");
    newTask.id = "user-tasks";
    todayTasks === null || todayTasks === void 0 ? void 0 : todayTasks.appendChild(newTask);
    console.log('oi');
    taskCreation();
});
console.log(userTasks);
userTasks.forEach((tasks) => {
    let listTask = document.createElement("li");
    listTask.textContent = tasks;
    todayTasks === null || todayTasks === void 0 ? void 0 : todayTasks.appendChild(listTask);
});
function taskCreation() {
    newTask === null || newTask === void 0 ? void 0 : newTask.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            userTasks.push(newTask.value);
            console.log(userTasks);
            storeTask();
            let newlyCreated = document.createElement("li");
            newlyCreated.textContent = newTask.value;
            todayTasks === null || todayTasks === void 0 ? void 0 : todayTasks.appendChild(newlyCreated);
            newTask.remove();
        }
    });
    newTask === null || newTask === void 0 ? void 0 : newTask.addEventListener("blur", function () {
        newTask.value = "";
    });
    //create an input and append it to the container thing
}
function storeTask() {
    localStorage.setItem("task-storage", JSON.stringify(userTasks));
}
export {};
