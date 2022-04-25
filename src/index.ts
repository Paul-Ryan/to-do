import { home } from "./user-interface/home";
import App from "./application-logic/app";

// set initial app state
const { getCurrentToDoList, getCurrentProjects, handleSubmitToDo } = App();
// setup events for homepage
const { buildHome } = home({
  getCurrentToDoList,
  getCurrentProjects,
  handleSubmitToDo,
});
buildHome();
