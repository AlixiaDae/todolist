class Todo {
  constructor(title, description, dueDate = "") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    return (this.title = newTitle);
  }

  getDescription() {
    return this.description;
  }

  setDescription(newDescription) {
    return (this.description = newDescription);
  }

  getDueDate() {
    if (this.date == "") {
      let newDate = new Date();
      let day = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();

      let today = day + "/" + month + "/" + year;

      return today;
    } else {
      return this.dueDate;
    }
  }

  setDate(newDate) {
    return (this.dueDate = newDate);
  }
}

export default Todo;
