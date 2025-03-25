class Task {
    constructor(name, description, completed = false) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.id = Date.now(); // Unique ID for each task
    }
}

const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
const taskListElement = document.getElementById('taskList');
const taskNameInput = document.getElementById('taskName');
const taskDescriptionInput = document.getElementById('taskDescription');
const addTaskBtn = document.getElementById('addTaskBtn');
const showAllBtn = document.getElementById('showAllBtn');
const showPendingBtn = document.getElementById('showPendingBtn');
const showCompletedBtn = document.getElementById('showCompletedBtn');
const searchTaskInput = document.getElementById('searchTask');

function renderTasks(tasks = taskList) {
    taskListElement.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');
        if (task.completed) {
            taskElement.classList.add('completed');
        }

        taskElement.innerHTML = `
            <div class="task-details">
                <h3>${task.name}</h3>
                <p>${task.description}</p>
                <p>Status: ${task.completed ? 'Completed' : 'Pending'}</p>
            </div>
            <div class="task-actions">
                <button class="edit-btn" data-id="${task.id}"><i class="fa-solid fa-file-pen"></i> Edit</button>
                <button class="delete-btn" data-id="${task.id}"><i class="fa-solid fa-trash-can"></i> Delete</button>
                <button class="toggle-status-btn" data-id="${task.id}">${task.completed ? '<i class="fa-solid fa-square-xmark"></i> Pending' : '<i class="fa-solid fa-check"></i> Complete'}</button>
            </div>
        `;
        taskListElement.appendChild(taskElement);
    });

    // Add event listeners for edit, delete, and toggle status buttons
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', editTask);
    });
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deleteTask);
    });
    document.querySelectorAll('.toggle-status-btn').forEach(button => {
        button.addEventListener('click', TaskStatus);
    });
}

function addTask() {
    const name = taskNameInput.value.trim();
    const description = taskDescriptionInput.value.trim();

    if (!name) {
        alert('Task name cannot be empty.');
        return;
    }

    const newTask = new Task(name, description);
    taskList.push(newTask);
    saveTasks();
    renderTasks();
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
}

function editTask(event) {
    const taskId = parseInt(event.target.dataset.id);
    const task = taskList.find(task => task.id === taskId);

    if (task) {
        const newName = prompt('Enter new task name:', task.name);
        const newDescription = prompt('Enter new description:', task.description);
        if (newName) {
            task.name = newName;
            task.description = newDescription;
            saveTasks();
            renderTasks();
        }
    }
}

function deleteTask(event) {
    const taskId = parseInt(event.target.dataset.id);
    const index = taskList.findIndex(task => task.id === taskId);
    if (index !== -1) {
        taskList.splice(index, 1);
        saveTasks();
        renderTasks();
    }
}

function TaskStatus(event) {
    const taskId = parseInt(event.target.dataset.id);
    const task = taskList.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

function filterTasks(status) {
    let filteredTasks;
    if (status === 'completed') {
        filteredTasks = taskList.filter(task => task.completed);
    } else if (status === 'pending') {
        filteredTasks = taskList.filter(task => !task.completed);
    } else {
        filteredTasks = taskList;
    }
    renderTasks(filteredTasks);
}

function searchTasks(searchTerm) {
    const filteredTasks = taskList.filter(task => {
        const taskNameLower = task.name.toLowerCase();
        const taskDescriptionLower = task.description.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        return taskNameLower.includes(searchTermLower) || taskDescriptionLower.includes(searchTermLower);
    });
    renderTasks(filteredTasks);
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

addTaskBtn.addEventListener('click', addTask);
showAllBtn.addEventListener('click', () => filterTasks('all'));
showPendingBtn.addEventListener('click', () => filterTasks('pending'));
showCompletedBtn.addEventListener('click', () => filterTasks('completed'));
searchTaskInput.addEventListener('input', () => searchTasks(searchTaskInput.value));

renderTasks();