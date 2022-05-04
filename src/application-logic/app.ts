import buildProject from "./project";
import buildToDo from "./todo";

const App = () => {
  const defaultProject = buildProject("To do");
  const projects = [defaultProject];
  let currentProjectIdx = 0;
  let currentToDoList = projects[currentProjectIdx].getToDos();

  const getCurrentProject = () => {
    return currentToDoList;
  };

  const setCurrentProject = (idx: number) => {
    currentProjectIdx = idx;
    currentToDoList = projects[currentProjectIdx].getToDos();
  };

  const getProjects = () => {
    return projects;
  };

  const handleSubmitToDo = (description: string) => {
    const newToDo = buildToDo({ description });
    projects[currentProjectIdx].addToDo(newToDo);
  };

  const handleSetCurrentProject = (projectIdx: number) => {
    if (projects.length > projectIdx) {
      setCurrentProject(projectIdx);
    }
  };

  const handleSubmitProject = (name: string) => {
    const newProject = buildProject(name);
    projects.push(newProject);
  };

  return {
    getCurrentToDoList: getCurrentProject,
    getProjects,
    handleSetCurrentProject,
    handleSubmitToDo,
    handleSubmitProject,
  };
};

export default App;
