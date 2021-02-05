//selectors
const todoInput = document.querySelector('.tdInput');
const todoButton = document.querySelector('.tdButton');
const todoList = document.querySelector('.tdList');
const selectOption = document.querySelector('.tdFilter')

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", check_del);
selectOption.addEventListener("click", filterTodo);


//Functions
function addTodo(event)
{
    //check for null value 
    if (todoInput.value === '' || todoInput.value === null)
    {
        push();
    }

    event.preventDefault(); //prevent form from submitting or refreshing the page
    
    //todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('tdItem');
    todoDiv.appendChild(newTodo);

    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    //append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";

}

function check_del(ev)
{
    const item = ev.target;

    //delete Item
    if (item.classList[0] === "trash-btn")
    {
        const todo = item.parentElement;

        //Del Animation
        todo.classList.add("fallAnimation");
        todo.addEventListener
        (
            'transitionend',
            function()
            {
                todo.remove();
            }
        );
    }

    //check completed Item
    if (item.classList[0] === "completed-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        
    }
}

function filterTodo(e)
{
    const todos = todoList.childNodes;

    todos.forEach
    (
        function(todo)
        {
            switch(e.target.value)
            {
                case "all": 
                    todo.style.display = 'flex';
                    break;

                case "completed": 
                    if (todo.classList.contains('completed'))
                    {
                        todo.style.display = 'flex';
                    }
                    else
                    {
                        todo.style.display = "none";
                    }
                    break;

                case "remaining": 
                    if (!todo.classList.contains('completed'))
                    {
                        todo.style.display = 'flex';
                    }
                    else
                    {
                        todo.style.display = "none";
                    }
                    break;

            }
        }
    );
    
}