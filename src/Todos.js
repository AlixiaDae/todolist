import Project from "./project";

class Todos {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("This Week"));
    this.projects.push(new Project("This Month"));
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((proj) => proj.name === projectName);
  }

  addProject(newProjectObject) {
    if (this.projects.find((proj) => proj.name === newProjectObject.name))
      return;
    this.projects.push(newProjectObject);
  }

  sortTodos() {
    let todayProject = this.getProject("Today");
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let today = date + "/" + month + "/" + year;

    let weekProject = this.getProject("This Week");
    let monthProject = this.getProject("This Month").getTodos();

    // for week todos with due date of today
    for (let i = 0; i < weekProject.getTodos().length; i++) {
      let todo = weekProject.getTodos()[i];
      if (todo.getDate() === today) {
        todayProject.addTodo(todo);
        weekProject.deleteTodo(todo.title);
      }
    }
  }
}

export default Todos;
