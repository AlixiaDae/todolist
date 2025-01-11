class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    return (this.name = newName);
  }

  getTodos() {
    return this.todos;
  }

  getTodo(chosenTodoObject) {
    return this.todos.find((todo) => todo.title === chosenTodoObject.title);
  }

  addTodo(todoObject) {
    if (this.todos.find((todo) => todo.title === todoObject.title)) return;
    this.todos.push(todoObject);
  }

  deleteTodo(todoTitleToBeDeleted) {
    return (this.todos = this.todos.filter(
      (todo) => todo.title !== todoTitleToBeDeleted
    ));
  }
}

export default Project;
