function addTask() {
    const input = document.getElementById('inputTask');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');

    // Task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        newTask.remove();
    };

    // Append everything
    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    // Clear input
    input.value = "";
}
