import "./reset.css";
import "./typography.css";
import "./home.css";
import { ToDo } from "../application-logic/todo";
import { Project } from "../application-logic/project";

interface Props {
  getCurrentToDoList: () => ToDo[];
  getProjects: () => Project[];
  handleSetCurrentProject: (index: number) => void;
  handleSubmitToDo: (description: string) => void;
  handleSubmitProject: (name: string) => void;
}

const addToDo = document.querySelector("#add-to-do");
const addToDoForm = document.querySelector<HTMLFormElement>("#add-to-do-form");
const toDoListNode = document.querySelector("#to-do-list");
const projectNameInput =
  document.querySelector<HTMLInputElement>("#project-name");
const projectSelect =
  document.querySelector<HTMLSelectElement>("#select-project");
const addProjectForm =
  document.querySelector<HTMLFormElement>("#add-project-form");

export const home = ({
  getCurrentToDoList,
  getProjects,
  handleSetCurrentProject,
  handleSubmitToDo,
  handleSubmitProject,
}: Props): { buildHome: () => void } => {
  const toggleToDoForm = () => {
    addToDoForm.classList.toggle("hidden");
  };

  const populateProjectList = (projects: Project[]) => {
    clearProjectList();
    projects.forEach((project, idx) => {
      const newProjectOption = document.createElement("option");
      newProjectOption.value = idx.toString();
      newProjectOption.textContent = project.name;
      projectSelect.appendChild(newProjectOption);
    });
  };

  const clearProjectList = () => {
    while (projectSelect.length > 0) {
      projectSelect.remove(projectSelect.length - 1);
    }
  };

  const clearProjectForm = () => {
    projectNameInput.value = "";
  };

  const buildToDoNode = (todo: ToDo) => {
    const newToDoNode = document.createElement("div");
    newToDoNode.textContent = todo.description;
    newToDoNode.classList.add("to-do");

    toDoListNode.appendChild(newToDoNode);
  };

  const buildToDoList = (toDoList: ToDo[]) => {
    clearToDoList();
    toDoList.forEach(buildToDoNode);
  };

  const clearToDoList = () => {
    while (toDoListNode.firstChild) {
      toDoListNode.removeChild(toDoListNode.firstChild);
    }
  };

  const submitToDo = (e: Event) => {
    e.preventDefault();
    const currentToDoList = getCurrentToDoList();

    // construct a FormData object, which fires the formdata event
    const formData = new FormData(addToDoForm);
    const description = formData.get("description").toString();
    handleSubmitToDo(description);
    buildToDoList(currentToDoList);
  };

  const submitProject = (e: Event) => {
    e.preventDefault();
    const projects = getProjects();

    // construct a FormData object, which fires the formdata event
    const formData = new FormData(addProjectForm);
    const name = formData.get("project-name").toString();
    clearProjectForm();
    handleSubmitProject(name);
    populateProjectList(projects);
  };

  const setCurrentProjectIndex = (e: Event) => {
    const selectedProject = (<HTMLSelectElement>e.target).value;
    handleSetCurrentProject(parseInt(selectedProject));
    console.log("selcted idx", parseInt(selectedProject));

    const currentToDoList = getCurrentToDoList();
    buildToDoList(currentToDoList);
  };

  const buildHome = () => {
    const projects = getProjects();
    populateProjectList(projects);
    addToDo.addEventListener("click", toggleToDoForm);
    addToDoForm.addEventListener("submit", submitToDo);
    addProjectForm.addEventListener("submit", submitProject);
    projectSelect.addEventListener("change", setCurrentProjectIndex);
  };

  return { buildHome };
};
