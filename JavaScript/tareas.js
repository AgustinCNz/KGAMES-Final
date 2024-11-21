// Lista de tareas
let tasks = [];

// Mostrar la sección de tareas
function showTasks() {
    document.getElementById('tasks').classList.add('active');
    document.getElementById('calculator').classList.remove('active');
    renderTasks();
}

// Renderizar las tareas en la lista
function renderTasks() {
    const taskContainer = document.getElementById('tasks-container');
    taskContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.style.display = 'flex';
        taskElement.style.justifyContent = 'space-between';
        taskElement.style.alignItems = 'center';
        taskElement.style.marginBottom = '10px';
        taskElement.style.padding = '10px';
        taskElement.style.backgroundColor = task.completed ? '#d4edda' : '#f8d7da';

        // Descripción de la tarea
        const taskDescription = document.createElement('span');
        taskDescription.textContent = task.description;
        taskDescription.style.flex = '1';
        taskDescription.style.textDecoration = task.completed ? 'line-through' : 'none';

        // Botón para marcar como realizada
        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Desmarcar' : 'Completar';
        completeButton.style.marginRight = '10px';
        completeButton.onclick = () => toggleTaskCompletion(index);

        // Botón para eliminar la tarea
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.style.backgroundColor = '#dc3545';
        deleteButton.style.color = 'white';
        deleteButton.onclick = () => deleteTask(index);

        // Agregar los elementos al contenedor de la tarea
        taskElement.appendChild(taskDescription);
        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);
        taskContainer.appendChild(taskElement);
    });
}

// Abrir el modal de creación de tareas
function openModal() {
    const modal = document.getElementById('task-modal');
    modal.classList.add('show');
}

// Cerrar el modal de creación de tareas
function closeModal() {
    const modal = document.getElementById('task-modal');
    modal.classList.remove('show');
}

// Agregar una tarea desde el modal
function addTask() {
    const taskInput = document.getElementById('task-input');
    const description = taskInput.value.trim();

    if (description) {
        tasks.push({ description, completed: false });
        renderTasks();
        taskInput.value = ''; // Limpiar el campo del modal
        closeModal(); // Cerrar el modal
    } else {
        alert('Por favor, ingresa una descripción para la tarea.');
    }
}

// Cambiar el estado de una tarea (completada o no completada)
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Eliminar una tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
