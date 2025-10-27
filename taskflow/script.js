let tasks = [];
let currentFilter = 'all';

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const completedCount = document.getElementById('completedCount');
const clearCompletedBtn = document.getElementById('clearCompleted');
const filterButtons = document.querySelectorAll('.filter-btn');

function showAlert(message, type = 'error', duration = 2000) {
    let alertBox = document.querySelector('.custom-alert');
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.className = 'custom-alert';
        document.body.appendChild(alertBox);
    }
    alertBox.textContent = message;
    alertBox.className = `custom-alert ${type} show`;
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, duration);
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
clearCompletedBtn.addEventListener('click', clearCompleted);

filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderTasks();
    });
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        showAlert('Please enter a task!');
        return;
    }
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    tasks.push(task);
    taskInput.value = '';
    taskInput.focus();
    renderTasks();
    updateStats();
}

function renderTasks() {
    taskList.innerHTML = '';
    let filteredTasks = tasks;
    if (currentFilter === 'active') filteredTasks = tasks.filter(t => !t.completed);
    else if (currentFilter === 'completed') filteredTasks = tasks.filter(t => t.completed);
    if (filteredTasks.length === 0) {
        taskList.innerHTML = '<div class="empty-state">No tasks to show</div>';
        return;
    }
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.dataset.id = task.id;
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-text">${task.text}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

taskList.addEventListener('change', toggleTask);
taskList.addEventListener('click', deleteTask);

function toggleTask(e) {
    if (e.target.type === 'checkbox') {
        const taskId = parseInt(e.target.closest('.task-item').dataset.id);
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            renderTasks();
            updateStats();
        }
    }
}

function deleteTask(e) {
    if (e.target.classList.contains('delete-btn')) {
        const taskId = parseInt(e.target.closest('.task-item').dataset.id);
        tasks = tasks.filter(t => t.id !== taskId);
        renderTasks();
        updateStats();
    }
}

function clearCompleted() {
    const completedTasks = tasks.filter(t => t.completed).length;
    if (completedTasks === 0) {
        showAlert('No completed tasks to clear!');
        return;
    }
    if (confirm(`Clear ${completedTasks} completed task(s)?`)) {
        tasks = tasks.filter(t => !t.completed);
        renderTasks();
        updateStats();
    }
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    taskCount.textContent = `${total} ${total === 1 ? 'task' : 'tasks'}`;
    completedCount.textContent = `${completed} completed`;
}

renderTasks();
updateStats();
