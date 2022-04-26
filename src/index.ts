import { home } from "./user-interface/home";
import App from "./application-logic/app";

// set initial app state
const {
  getCurrentToDoList,
  getProjects,
  handleSetCurrentProject,
  handleSubmitToDo,
  handleSubmitProject,
} = App();

// setup events for homepage
const { buildHome } = home({
  getCurrentToDoList,
  getProjects,
  handleSetCurrentProject,
  handleSubmitToDo,
  handleSubmitProject,
});

buildHome();
