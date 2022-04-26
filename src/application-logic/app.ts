import buildProject from "./project";
import buildToDo from "./todo";

const App = () => {
  const defaultProject = buildProject("To do");
  const projects = [defaultProject];
  let currentProjectIdx = 0;
  const currentToDoList = projects[currentProjectIdx].getToDos();

  const getCurrentToDoList = () => {
    return currentToDoList;
  };

  const getCurrentProjects = () => {
    return projects;
  };

  const handleSubmitToDo = (description: string) => {
    const newToDo = buildToDo({ description });
    projects[currentProjectIdx].addToDo(newToDo);
  };

  const handleSetCurrentProject = (projectIdx: number) => {
    if (projects.length < projectIdx) {
      currentProjectIdx = projectIdx;
    }
  };

  const handleSubmitProject = (name: string) => {
    const newProject = buildProject(name);
    projects.push(newProject);
  };

  return {
    getCurrentToDoList,
    getCurrentProjects,
    handleSubmitToDo,
    handleSubmitProject,
  };
};

export default App;
