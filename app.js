// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


// Functions

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //Completed or Checked button
    const CompletedButton = document.createElement('button');
    CompletedButton.innerHTML = '<i class="fa fa-check"></i>';
    CompletedButton.classList.add("complete-btn");
    todoDiv.appendChild(CompletedButton);
    
    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    //append to list
    todoList.appendChild(todoDiv);

    //Clear todoInput value
    todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;

    //Delete todo item
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitioned', function() {
            todo.remove();
        })
    }

    //Check mark
    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}