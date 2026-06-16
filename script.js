let taskCount = 0;

function addTask(){

    const taskInput =
    document.getElementById("taskInput");

    const taskText =
    taskInput.value.trim();

    if(taskText === ""){
        return;
    }

    const task =
    document.createElement("div");

    task.classList.add("task");

    task.innerHTML = `
        <p>${taskText}</p>

        <button onclick="completeTask(this)">
            Complete
        </button>

        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById("todo-list")
    .appendChild(task);

    taskCount++;

    document.getElementById("task-count")
    .textContent = taskCount;

    taskInput.value = "";
}

function completeTask(button){

    const task =
    button.parentElement;

    document.getElementById("completed-list")
    .appendChild(task);

    button.remove();
}

function deleteTask(button){

    button.parentElement.remove();

    taskCount--;

    document.getElementById("task-count")
    .textContent = taskCount;
}