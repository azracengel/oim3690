// JavaScript logic for the to-do app

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }
});