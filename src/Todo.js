class Todo {
  constructor(title, description, date = "") {
    this.title = title;
    this.description = description;
    this.date = date;
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

  getDate() {
    if (this.date == "") {
      let newDate = new Date();
      let day = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();

      let today = day + "/" + month + "/" + year;

      return today;
    } else {
      return this.date;
    }
  }

  setDate(newDate) {
    return (this.date = newDate);
  }
}

export default Todo;
