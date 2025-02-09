let todos = [];

const todoList = document.querySelector('.todo-getter');
const inputData = document.querySelector('.inputData');
const todoItems = document.querySelector('.todo-items');



todoList.addEventListener("submit", function(event){
    event.preventDefault();
    // console.log(inputData.value);
    addTodo(inputData.value);
}); 

function addTodo(item){
    if(item !== ''){
        const todo = {
            name : item,
            completed : false
        };

        todos.push(todo);
        addToLocalStorage(todos);
        inputData.value = "";
    }
}

function addToLocalStorage(todos){
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodos(todos);
}  


function showTodos(todos){
    todoItems.innerHTML = '';
    todos.forEach(function(item){
        const checked = item.completed ? "checked" : null;
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.name);
        // console.log(li.getAttribute('data-key'))
        if(item.completed === true){
            li.classList.add('checked');
        }

        li.innerHTML = `
            <div class = "to-do">
                <input type = "checkbox" class = "checkbox" ${checked}>
                <div class = "todo-content">${item.name}</div>
                <button class = "delete-button"><i class="fa-solid fa-trash" id = "delete-button-icon" ></i></button>
            </div>
        `;
        todoItems.append(li);
    });
}

function getFromLocalStorage(){
    const reference = localStorage.getItem("todos");
    if(reference){
        todos = JSON.parse(reference);
        showTodos(todos);
    }
}

function madeComplete(name){
    todos.forEach(function(item){
        if(item.name == name){
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(todos);
}

function deleteTodo(name){
    todos = todos.filter(function(item){
        console.log("filtered");
        return item.name != name;
    });
    addToLocalStorage(todos);
}


getFromLocalStorage();

todoItems.addEventListener('click', function(event){
    if(event.target.type === "checkbox"){
        // console.log("checkbox clicked")
        madeComplete(event.target.parentElement.parentElement.getAttribute('data-key'));
    }
    // const icon = document.getElementById("delete-button");
    // if(event.target.id === "delete-button"){
    //     // console.log("delete clicked")
    //     icon.classList.toggle('hidden');
    //     console.log(event.target.id)
    //     console.log(event.target.parentElement.parentElement)
    //     deleteTodo(event.target.parentElement.parentElement.getAttribute('data-key'));
    // }else 
    if(event.target.classList.contains("delete-button") ){
        deleteTodo(event.target.parentElement.parentElement.getAttribute('data-key'));

    }
});