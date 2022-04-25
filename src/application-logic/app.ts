import buildProject from "./project";
import buildToDo from "./todo";

const App = () => {
  const defaultProject = buildProject("To do");
  const projects = [defaultProject];
  const currentProject = projects[0];
  const currentToDoList = currentProject.getToDos();

  const getCurrentToDoList = () => {
    return currentToDoList;
  };

  const getCurrentProjects = () => {
    return projects;
  };

  const handleSubmitToDo = (description: string) => {
    const newToDo = buildToDo({ description });
    currentProject.addToDo(newToDo);
  };

  return { getCurrentToDoList, getCurrentProjects, handleSubmitToDo };
};

export default App;
