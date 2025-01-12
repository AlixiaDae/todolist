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

    // Each function sorts a particular Project and moves and deletes a Todo according to due date
    sortMonthProject(monthProject, weekProject, todayProject);
    sortWeekProject(monthProject, weekProject, todayProject);
    sortTodayProject(monthProject, weekProject, todayProject);
  }
}

// SORT FUNCTIONS

function sortMonthProject(monthProj, weekProj, todayProj) {
  for (let i = 0; i < monthProj.getTodos().length; i++) {
    let todo = monthProj.getTodos()[i];
    let todoDueDate = todo.getDueDate();

    let reformattedDueDate = reformatDueDate(todoDueDate);

    let fullEndOfWeekDate = getEndOfWeekDate();

    if (isToday(reformattedDueDate) || beforeToday(reformattedDueDate)) {
      todayProj.addTodo(todo);
      monthProj.deleteTodo(todo.title);
    } else if (thisWeek(reformattedDueDate, fullEndOfWeekDate)) {
      weekProj.addTodo(todo);
      monthProj.deleteTodo(todo.title);
    }
  }
}

function sortWeekProject(monthProj, weekProj, todayProj) {
  for (let i = 0; i < weekProj.getTodos().length; i++) {
    let todo = weekProj.getTodos()[i];
    let todoDueDate = todo.getDueDate();
    let reformattedDueDate = reformatDueDate(todoDueDate);
    let fullEndOfWeekDate = getEndOfWeekDate();

    if (isToday(reformattedDueDate) || beforeToday(reformattedDueDate)) {
      todayProj.addTodo(todo);
      weekProj.deleteTodo(todo.title);
    } else if (!thisWeek(reformattedDueDate, fullEndOfWeekDate)) {
      monthProj.addTodo(todo);
      weekProj.deleteTodo(todo.title);
    }
  }
}

function sortTodayProject(monthProj, weekProj, todayProj) {
  for (let i = 0; i < todayProj.getTodos().length; i++) {
    let todo = todayProj.getTodos()[i];
    let todoDueDate = todo.getDueDate();
    let reformattedDueDate = reformatDueDate(todoDueDate);
    let fullEndOfWeekDate = getEndOfWeekDate();

    if (thisWeek(reformattedDueDate, fullEndOfWeekDate)) {
      weekProj.addTodo(todo);
      todayProj.deleteTodo(todo.title);
    }

    if (
      !isToday(reformattedDueDate) &&
      !thisWeek(reformattedDueDate, fullEndOfWeekDate) &&
      !beforeToday(reformattedDueDate)
    ) {
      monthProj.addTodo(todo);
      todayProj.deleteTodo(todo.title);
    }
  }
}

// DATE COMPARISON CHECKING FUNCTIONS

function isToday(dueDate) {
  const today = new Date();

  const isSameDate =
    dueDate.getDate() === today.getDate() &&
    dueDate.getMonth() === today.getMonth() &&
    dueDate.getFullYear() === today.getFullYear();
  return isSameDate;
}

function beforeToday(dueDate) {
  const today = new Date();
  const isbeforeToday =
    dueDate.getDate() < today.getDate() &&
    dueDate.getMonth() === today.getMonth() &&
    dueDate.getFullYear() === today.getFullYear();

  return isbeforeToday;
}

function thisWeek(dueDate, weekDate) {
  const today = new Date();
  const isWithinWeekEnd =
    dueDate.getDate() > today.getDate() &&
    dueDate.getMonth() === weekDate.getMonth() &&
    dueDate.getFullYear() === weekDate.getFullYear() &&
    dueDate.getDate() <= weekDate.getDate() &&
    dueDate.getMonth() === weekDate.getMonth() &&
    dueDate.getFullYear() === weekDate.getFullYear();

  return isWithinWeekEnd;
}

// UTIL FUNCTIONS

function reformatDueDate(dueDate) {
  let dueDateArray = dueDate.split("-");
  let todoDay = dueDateArray[2];
  let todoMonth = dueDateArray[1];
  let todoYear = dueDateArray[0];
  return new Date(todoYear, todoMonth - 1, todoDay);
}

function getEndOfWeekDate() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  let numberOfDaysInMonth = daysInMonth(month, year);
  let endOfWeekDay = day + 6;
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

  return new Date(endOfYear, endOfMonth, endOfWeekDay);
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export default Todos;
