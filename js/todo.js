
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

        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;
        listItem.appendChild(taskLabel);

        // Done button
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';

        doneButton.addEventListener('click', function() {
            taskLabel.style.textDecoration =
                taskLabel.style.textDecoration === 'line-through'
                    ? 'none'
                    : 'line-through';
        });

        listItem.appendChild(doneButton);

        // Edit button - extra feature
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';

        editButton.addEventListener('click', function() {
            const newText = prompt('Edit your task:', taskLabel.textContent);

            if (newText !== null && newText.trim() !== '') {
                taskLabel.textContent = newText.trim();
            }
        });

        listItem.appendChild(editButton);

        // Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';

        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }
});
