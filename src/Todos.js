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

    let monthProject = this.getProject("This Month");
    let weekProject = this.getProject("This Week");

    // Month Project sorting goes first so that any todos that are actually for Today gets caught in the week for loop

    // MONTH FOR LOOP
    for (let i = 0; i < monthProject.getTodos().length; i++) {
      let todo = monthProject.getTodos()[i];
      let todoDate = todo.getDueDate();

      // TODO check date typeOf when making dueDate of todo from a calendar picker
      let dateArray = todoDate.split("/");
      let todoDay = Number(dateArray[0]);
      let todoMonth = Number(dateArray[1]);
      let todoYear = Number(dateArray[2]);

      // for checking if end of the week is past number of days in a month
      let numberOfDaysInMonth = daysInMonth(month, year);
      let endOfWeekDay = date + 6;
      let endOfMonth = month;
      let endOfYear = year;

      if (endOfWeekDay > numberOfDaysInMonth) {
        endOfWeekDay = 1;
        endOfMonth += 1;

        // reset month to January and add 1 to year
        if (endOfMonth === 13) {
          endOfMonth = 1;
          endOfYear += 1;
        }
      }

      // Reformat for proper comparisons
      let startDate = new Date();
      let endOfWeekDate = new Date(endOfYear, endOfMonth - 1, endOfWeekDay);
      let todoDueDate = new Date(todoYear, todoMonth - 1, todoDay);

      if (todoDueDate >= startDate && todoDueDate <= endOfWeekDate) {
        weekProject.addTodo(todo);
        monthProject.deleteTodo(todo.title);
      }
    }

    // WEEK FOR LOOP
    for (let i = 0; i < weekProject.getTodos().length; i++) {
      let todo = weekProject.getTodos()[i];
      if (todo.getDueDate() === today) {
        todayProject.addTodo(todo);
        weekProject.deleteTodo(todo.title);
      }
    }
  }
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export default Todos;
