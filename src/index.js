import Todo from "./todo";
import Project from "./project";
import Todos from "./Todos";

// TEST
/*let testTodo = new Todo("Todo 1", "new test for todo box 1");
let testTodo2 = new Todo("Todo 2", "new test for todo box 2");
let testTodo3 = new Todo("Todo 3", "new test for todo box 3"); 
let dateSortTest = new Todo("Todo 5", "new test for date sorting", "15-1-2025");
let monthTest = new Todo("Month test", "testing month sort", "26-1-2025");



todayTodos.addTodo(testTodo);
todayTodos.addTodo(testTodo2);
todayTodos.addTodo(testTodo3);
todayTodos.addTodo(dateSortTest);

monthTodos.addTodo(monthTest);
*/

const allTodos = new Todos();

const todayTodos = allTodos.getProject("Today");
const weekTodos = allTodos.getProject("This Week");
const monthTodos = allTodos.getProject("This Month");

//allTodos.sortTodos();

// DOM ELEMENTS

const main = document.querySelector(".main-board");
const addBtn = document.querySelector(".button-box");
const todoForm = document.querySelector(".todo-form");
const closeTodoFormBtn = document.querySelector(".fa-circle-xmark");
const todoSubmitBtn = document.querySelector(".create-todo-btn");

// Listeners

addBtn.addEventListener("click", closeFormAndReset);

closeTodoFormBtn.addEventListener("click", closeFormAndReset);

todoSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let project = todoForm.elements.item(0);
  let title = todoForm.elements.item(1);
  let description = todoForm.elements.item(2);
  let dueDate = todoForm.elements.item(3);

  if (dueDate.value === "") {
    const newTodo = new Todo(title.value, description.value);
    //console.log(newTodo.getDueDate())
    if (project.value === "today") {
      todayTodos.addTodo(newTodo);
    } else if (project.value === "this week") {
      weekTodos.addTodo(newTodo);
    } else if (project.value === "this month") {
      monthTodos.addTodo(newTodo);
    } 
  } else {
    const newTodo = new Todo(
      title.value,
      description.value,
      dueDate.value
    );
    if (project.value === "today") {
      todayTodos.addTodo(newTodo);
    } else if (project.value === "this week") {
      weekTodos.addTodo(newTodo);
    } else if (project.value === "this month") {
      monthTodos.addTodo(newTodo);
   }
  }

  project.value = "today";
  title.value = "";
  description.value = "";
  dueDate.value = "";
  todoForm.classList.add("invisible");
  allTodos.sortTodos();
  showProjects();
});

// Listener Functions

function closeFormAndReset() {
  todoForm.classList.toggle("invisible");
  let project = todoForm.elements.item(0);
  let title = todoForm.elements.item(1);
  let description = todoForm.elements.item(2);
  let dueDate = todoForm.elements.item(3);

  project.value = "today";
  title.value = "";
  description.value = "";
  dueDate.value = "";
}

function reformatDate(date) {
  let dateArray = date.split("-");
  let newDate = new Date(dateArray[0], dateArray[1], dateArray[2]);
  let day = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  return newDate;
}

// DOM Loaders
showProjects();

function showProjects() {
  main.textContent = "";
  // to ensure no color repeats
  let colorArray = [
    "#FAEDCB",
    "#C9E4DE",
    "#C6DEF1",
    "#D8CDF0",
    "#F2C6DE",
    "#F7D9C4",
  ];

  for (let i = 0; i < allTodos.getProjects().length; i++) {
    let project = allTodos.getProjects()[i];

    let projectBox = createProjectBox(project);

    // Color each project header differently

    let bgColorIndex = Math.floor(Math.random() * (5 - 0)) + 0;
    let bgColor = colorArray[bgColorIndex];
    let projectHeader = projectBox.childNodes[0];

    projectHeader.style.backgroundColor = bgColor;

    // Remove color from array so it can't be picked again
    colorArray.splice(bgColorIndex, 1);

    main.appendChild(projectBox);
  }
}

// DOM Creation Functions

function createProjectBox(projectObject) {
  const projectBox = document.createElement("div");
  projectBox.classList.add("project-box");

  const projectHeader = document.createElement("p");
  projectHeader.classList.add("project-header");
  projectHeader.textContent = projectObject.name;

  const projectTodos = projectObject.getTodos();

  projectBox.appendChild(projectHeader);

  if (projectTodos.length != 0) {
    const todoBox = document.createElement("div");
    todoBox.classList.add("todo-box");
    todoBox.classList.add("visible");

    for (let i = 0; i < projectTodos.length; i++) {
      let todo = projectTodos[i];
      let todoEl = createTodoBox(todo);

      if (i % 2 == 1) {
        todoEl.style.backgroundColor = "#e4e4e4";
      } else {
        todoEl.style.backgroundColor = "white";
      }

      todoBox.appendChild(todoEl);
    }

    projectBox.appendChild(todoBox);

    // Listeners

    projectBox.addEventListener("click", (e) => {
      todoBox.classList.toggle("visible");
    });
  }

  return projectBox;
}

function createTodoBox(todoObject) {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("checked-id", "checkbox");

  const todoTitle = document.createElement("p");
  todoTitle.classList.add("todo-title");
  todoTitle.textContent = todoObject.title;

  const todoDate = document.createElement("p");
  todoDate.classList.add("todo-date");
  todoDate.textContent = todoObject.getDueDate();

  const checkTitleDate = document.createElement("div");
  checkTitleDate.classList.add("check-title-date");

  checkTitleDate.append(checkBox, todoTitle, todoDate);

  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todo-description");
  todoDescription.textContent = todoObject.description;

  // Listeners

  todo.addEventListener("click", (e) => {
    if (e.target != todoTitle) {
      todoDescription.classList.toggle("visible");
    }
  });

  todoTitle.addEventListener("click", () => {
    todoTitle.contentEditable = true;
  });

  todo.append(checkTitleDate, todoDescription);

  return todo;
}
