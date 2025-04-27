//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption =document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener('click',filterTodo); 
 
//Functions
function addTodo(event){
    
//    if (todoInput.value!=""){
    
    //prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo=document.createElement('li');
    newTodo.innerHTML=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //ADD TODO TO LOCALSTORAGE
    saveLocalTodos(todoInput.value);
    //CHECK MARK BUTTON
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)
    //TRASH BUTTON
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear the input value
    todoInput.value="";
 
//    }
//    else{
//     alert('Enter value')
//    }
}

function deleteCheck(event){
//  console.log(event.target);   
    const item =event.target;
    //Delete Todo
    if (item.classList[0]=== "trash-btn"){
     const todo =item.parentElement;
     todo.classList.add("fall");
     removeLocalTodos(todo);
 todo.addEventListener("transitionend",function(){
todo.remove();
 });
    }

    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    // debugger
    const todos =todoList.childNodes;
    // console.log(todos)


    todos.forEach(function(todo) {
        if (todo.nodeType === 1) { // Only process element nodes
            switch(e.target.value){
                case "all":
                    todo.style.display = 'flex';
                    break;
                case "completed":
                    if (todo.classList.contains('completed')){
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
             case "uncompleted":
                        if (!todo.classList.contains("completed")){
                        todo.style.display = "flex";
                        }
                        else{
                        todo.style.display = "none";
                        }

                        break;
                    }
        }
    });
    
// todos.forEach((todo)=>{
//     switch(e.target.value){
//         case "all":
//             todo.style.display='block';
//             break;
//         case "completed":
//             if (todo.classList.contains('completed')){
//                 todo.style.display="block";
//             }else{
//                 todo.style.display="none";
//             }
             
//     }
// });

}

//Local Storage
function saveLocalTodos(todo){
    //CHECK --HEY DO I ALREADY HAVE THING IN THERE?

    let todos;
    if (localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    // console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos()
{
    
    let todos;
    if (localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(todo){
        
    //Todo DIV
    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo=document.createElement('li');
    newTodo.innerHTML=todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); 
    //CHECK MARK BUTTON
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)
    //TRASH BUTTON
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    // console.log(todo.children[0].innerHTML);
   const todoIndex=  todos.indexOf(todo.children[0].innerHTML);
//    console.log(todoIndex);
    todos.splice(todoIndex,1)
//    console.log(todos.indexOf(todoIndex));
//    console.log(JSON.stringify(todos));

    localStorage.setItem('todos',JSON.stringify(todos));


}

