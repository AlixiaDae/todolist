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
    let monthProject = this.getProject("This Month");
    let weekProject = this.getProject("This Week");

    // Starting from monthLoop, this function checks if a todo's dueDate is actually this week and sorts
    // From there, the weekLoop fires and checks if a todo's dueDate is actually this month or for today and sorts
    // Last, the todayLoop fires and checks if a todo's dueDate is NOT today
        // if it is not for today, todo is added to monthProject and monthLoop and weekLoop fires again and sorts todo to proper project

    monthLoop(monthProject, weekProject, todayProject);
    weekLoop(monthProject, weekProject, todayProject);
    todayLoop(monthProject, weekProject, todayProject);
  }
}

// UTIL FUNCTIONS

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function monthLoop(monthProj, weekProj, todayProj) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let today = date + "-" + month + "-" + year;

  for (let i = 0; i < monthProj.getTodos().length; i++) {
    let todo = monthProj.getTodos()[i];
    let todoDate = todo.getDueDate();

    let dateArray = todoDate.split("-");
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
      weekProj.addTodo(todo);
      monthProj.deleteTodo(todo.title);
    }
    if (todoDate === today || todoDate < today) {
      todayProj.addTodo(todo);
      monthProj.deleteTodo(todo.title);
    }
  }
}

function weekLoop(monthProj, weekProj, todayProj) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let today = date + "-" + month + "-" + year;

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

  let endOfWeek = new Date(endOfYear, endOfMonth - 1, endOfWeekDay);
  let endOfWeekDate = `${endOfWeek.getDate()}-${
    endOfWeek.getMonth() + 1
  }-${endOfWeek.getFullYear()}`;

  for (let i = 0; i < weekProj.getTodos().length; i++) {
    let todo = weekProj.getTodos()[i];
    if (todo.getDueDate() === today) {
      todayProj.addTodo(todo);
      weekProj.deleteTodo(todo.title);
    }
    if (todo.getDueDate() > endOfWeekDate) {
      monthProj.addTodo(todo);
      weekProj.deleteTodo(todo.title);
    }
  }
}

function todayLoop(monthProj, weekProj, todayProj) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let today = date + "-" + month + "-" + year;

  for (let i = 0; i < todayProj.getTodos().length; i++) {
    let todo = todayProj.getTodos()[i];
    let todoDate = todo.getDueDate();

    if (todoDate != today) {
      monthProj.addTodo(todo);
      todayProj.deleteTodo(todo.title);

      monthLoop(monthProj, weekProj);
      weekLoop(monthProj, weekProj, todayProj);
    }
  }
}

export default Todos;
