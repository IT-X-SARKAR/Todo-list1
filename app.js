document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    function createTodoItem(text) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = text;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit your to-do item:', span.textContent);
            if (newText) {
                span.textContent = newText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    }
    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            createTodoItem(todoText);
            todoInput.value = '';
        }
    });
    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});