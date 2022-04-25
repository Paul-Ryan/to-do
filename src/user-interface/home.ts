import "./home.css";
import { ToDo } from "../application-logic/todo";
import { Project } from "../application-logic/project";

interface Props {
  getCurrentToDoList: () => ToDo[];
  getCurrentProjects: () => Project[];
  handleSubmitToDo: (description: string) => void;
}

const addToDo = document.querySelector("#add-to-do");
const addToDoForm = document.querySelector<HTMLFormElement>("#add-to-do-form");
const toDoListNode = document.querySelector("#to-do-list");
const projectSelect = document.querySelector("#select-project");

export const home = ({
  getCurrentToDoList,
  getCurrentProjects,
  handleSubmitToDo,
}: Props): { buildHome: () => void } => {
  const toggleToDoForm = () => {
    addToDoForm.classList.toggle("hidden");
  };

  const populateProjectList = (projects: Project[]) => {
    clearProjectList();
    projects.forEach((project) => {
      const newProjectOption = document.createElement("option");
      newProjectOption.value = project.name;
      newProjectOption.textContent = project.name;
      projectSelect.appendChild(newProjectOption);
    });
  };

  const clearProjectList = () => {
    while (projectSelect.firstChild) {
      projectSelect.removeChild(toDoListNode.firstChild);
    }
  };

  const buildToDoNode = (todo: ToDo) => {
    const newToDoNode = document.createElement("div");
    newToDoNode.textContent = todo.description;

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

  const buildHome = () => {
    const projects = getCurrentProjects();
    populateProjectList(projects);
    addToDo.addEventListener("click", toggleToDoForm);
    addToDoForm.addEventListener("submit", submitToDo);
  };

  return { buildHome };
};
