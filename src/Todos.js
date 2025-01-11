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
}

export default Todos;
