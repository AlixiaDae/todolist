import Todo from "./todo";
import Project from "./project";
import Todos from "./Todos";

// TEST
let testTodo1 = new Todo("testing1", "new test");
let testTodo2 = new Todo("testing2", "new test");
let testTodo3 = new Todo("testing3", "new test");

let testProject = new Project("Test Project");

testProject.addTodo(testTodo1);
testProject.addTodo(testTodo2);
testProject.addTodo(testTodo3);
//

const todos = new Todos();

// DOM ELEMENTS
const main = document.querySelector(".main-board");

// DOM Creation Functions

function createProjectBox(projectObject) {
  const projectBox = document.createElement("div");
  projectBox.classList.add("project-box");

  const projectHeader = document.createElement("p");
  projectHeader.classList.add("project-header");

  projectHeader.textContent = projectObject.name;

  projectBox.appendChild(projectHeader);
  return projectBox;
}

// DOM Loaders

function showProjects() {
  for (let i = 0; i < todos.getProjects().length; i++) {
    let project = todos.getProjects()[i];
    main.appendChild(createProjectBox(project));
  }
}

showProjects();
