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
    if (this.dueDate == "") {
      let newDate = new Date();
      let day = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();

      return (this.dueDate = `${year}-${month}-${day}`);
    } else {
      let dateArray = this.dueDate.split("-");
      let newDate = new Date(dateArray[0], dateArray[1], dateArray[2]);
      let day = newDate.getDate();
      let month = newDate.getMonth() ;
      let year = newDate.getFullYear();

      return (this.dueDate = `${year}-${month}-${day}`);
    }
  }

  setDate(newDate) {
    return (this.dueDate = newDate);
  }
}

export default Todo;
