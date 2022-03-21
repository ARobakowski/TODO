// Selectors
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("task-list");
const todoAdd = document.getElementById("add-btn");
const clearAllBtn = document.getElementById("clear-all");
const filterOption = document.querySelector(".filters");

// Event Listeners
todoAdd.addEventListener("click", addTodo);
todoList.addEventListener("click", listControls);
clearAllBtn.addEventListener("click", clearAll);
filterOption.addEventListener("click", filterTodo);

// Functions

function addTodo(event) {
  // Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create li
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerHTML = todoInput.value;
  todoDiv.appendChild(newTodo);
  //  Completed button
  const completedBtn = document.createElement("button");
  completedBtn.classList.add("completed-btn");
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completedBtn);
  //   Remove button
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.innerHTML = '<i class="fas fa-trash"><i>';
  todoDiv.appendChild(removeBtn);
  //   Append to list
  if (todoInput.value !== "") {
    todoList.appendChild(todoDiv);
    //  Reset the input value
    todoInput.value = "";
  }
}

// Press enter to add todo
todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

function clearAll() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
}

function listControls(e) {
  // Delete todo
  const item = e.target;
  if (item.classList[0] === "remove-btn") {
    item.parentElement.classList.add("fall");
    item.parentElement.addEventListener("transitionend", () => {
      item.parentElement.remove();
    });
  }
  // Completed todo
  if (item.classList[0] === "completed-btn") {
    item.parentElement.classList.add("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}