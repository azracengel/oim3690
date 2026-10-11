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
const doneButton = document.createElement('button');
doneButton.textContent = 'Done';

doneButton.addEventListener('click', function() {
    listItem.style.textDecoration =
        listItem.style.textDecoration === 'line-through'
            ? 'none'
            : 'line-through';
});

listItem.appendChild(doneButton);
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
    
taskList.appendChild(listItem);

    }
});