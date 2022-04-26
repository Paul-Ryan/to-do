import buildProject from "./project";
import buildToDo from "./todo";

const App = () => {
  const defaultProject = buildProject("To do");
  const projects = [defaultProject];
  let currentProjectIdx = 0;
  let currentToDoList = projects[currentProjectIdx].getToDos();

  const getCurrentToDoList = () => {
    return currentToDoList;
  };

  const setCurrentToDoList = () => {
    currentToDoList = projects[currentProjectIdx].getToDos();
    console.log("currentToDoList", currentToDoList);
    console.log("curent project", getCurrentProject().name);
  };

  const getProjects = () => {
    return projects;
  };

  const getCurrentProject = () => {
    return projects[currentProjectIdx];
  };

  const setCurrentProjectIdx = (idx: number) => {
    currentProjectIdx = idx;
  };

  const handleSubmitToDo = (description: string) => {
    const newToDo = buildToDo({ description });
    projects[currentProjectIdx].addToDo(newToDo);
  };

  const handleSetCurrentProject = (projectIdx: number) => {
    if (projects.length > projectIdx) {
      setCurrentProjectIdx(projectIdx);
      setCurrentToDoList();
    }
  };

  const handleSubmitProject = (name: string) => {
    const newProject = buildProject(name);
    projects.push(newProject);
  };

  return {
    getCurrentToDoList,
    getProjects,
    handleSetCurrentProject,
    handleSubmitToDo,
    handleSubmitProject,
  };
};

export default App;
