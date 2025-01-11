import Todo from "./todo";
import Project from "./project";
import Todos from "./Todos";

// TEST
let testTodo = new Todo("Today todo", "new test for todo box 1");
let testTodo2 = new Todo("Today todo 2", "new test for todo box 2");
let testTodo3 = new Todo("Today todo 3", "new test for todo box 3");

//

const allTodos = new Todos();

const todayTodos = allTodos.getProject("Today");

todayTodos.addTodo(testTodo);
todayTodos.addTodo(testTodo2);
todayTodos.addTodo(testTodo3);

// DOM ELEMENTS
const main = document.querySelector(".main-board");

// DOM Loaders

function showProjects() {
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

    let bgColorIndex = Math.floor(Math.random() * 5);
    let bgColor = colorArray[bgColorIndex];
    let projectHeader = projectBox.childNodes[0];

    projectHeader.style.backgroundColor = bgColor;

    // Remove color from array so it can't be picked again
    colorArray.splice(bgColorIndex, 1);

    main.appendChild(projectBox);
  }
}

showProjects();

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
  todoTitle.contentEditable = true;
  todoTitle.textContent = todoObject.title;

  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todo-description");
  todoDescription.contentEditable = true;
  todoDescription.textContent = todoObject.description;

  const todoDate = document.createElement("p");
  todoDate.classList.add("todo-date");
  todoDate.textContent = todoObject.getDate();

  const titleDescription = document.createElement("div");
  titleDescription.classList.add("title-description");

  // Listeners

  todoTitle.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      todoObject.title = todoTitle.textContent;
      todoTitle.blur();
      console.log(todayTodos);
    }
  });

  todoDescription.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      todoObject.description = todoDescription.textContent;
      todoDescription.blur();
      console.log(todayTodos);
    }
  });

  titleDescription.append(todoTitle, todoDescription);
  todo.append(checkBox, titleDescription, todoDate);

  return todo;
}
