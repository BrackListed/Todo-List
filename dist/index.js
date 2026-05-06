console.log("Hello World");
let addTask = document.querySelector(".add-task");
let userTasks = JSON.parse(localStorage.getItem("task-storage") || "[]");
let todayTasks = document.querySelector("#today-container");
let newTask = null;
let taskPlaceholder = document.getElementById("task-placeholder");
if (userTasks.length > 0) {
    taskPlaceholder.remove();
}
else {
}
addTask === null || addTask === void 0 ? void 0 : addTask.addEventListener("click", function () {
    newTask = document.createElement("input");
    newTask.id = "user-tasks";
    todayTasks === null || todayTasks === void 0 ? void 0 : todayTasks.appendChild(newTask);
    taskCreation();
});
userTasks.forEach((tasks) => {
    let listTask = document.createElement("li");
    listTask.textContent = tasks;
    todayTasks === null || todayTasks === void 0 ? void 0 : todayTasks.appendChild(listTask);
});
function taskCreation() {
    newTask === null || newTask === void 0 ? void 0 : newTask.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            userTasks.push(newTask.value);
            storeTask();
            let newlyCreated = document.createElement("li");
            newlyCreated.textContent = newTask.value;
            todayTasks === null || todayTasks === void 0 ? void 0 : todayTasks.appendChild(newlyCreated);
            newTask.remove();
            taskPlaceholder.remove();
        }
    });
    newTask === null || newTask === void 0 ? void 0 : newTask.addEventListener("blur", function () {
        newTask.value = "";
    });
}
function storeTask() {
    localStorage.setItem("task-storage", JSON.stringify(userTasks));
}
export {};
