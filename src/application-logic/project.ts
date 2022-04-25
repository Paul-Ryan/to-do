import { ToDo } from './todo'

type Project = {
    addToDo: (todo: ToDo) => void
    getToDos: () => ToDo[]
    name: string
}

const Project = (name: string): Project => {
    const projectTodos: ToDo[] = []

    const addToDo = (todo: ToDo) => {
        projectTodos.push(todo)
    }

    const getToDos = () => {
        return projectTodos
    }

    return ({ addToDo, getToDos, name })
}

export default Project;