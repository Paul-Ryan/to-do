import { ToDo } from "./todo";

export type Project = {
  addToDo: (todo: ToDo) => void;
  getToDos: () => ToDo[];
  name: string;
};

const buildProject = (name: string): Project => {
  const projectTodos: ToDo[] = [];

  const addToDo = (todo: ToDo) => {
    projectTodos.push(todo);
  };

  const getToDos = () => {
    return projectTodos;
  };

  return { addToDo, getToDos, name };
};

export default buildProject;
