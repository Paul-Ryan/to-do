import './home.css'
import {todo} from '../application-logic/todo'

interface Props {
    currentToDoList: todo[]
    handleSubmitToDo: (description: string) => void
}

const addToDo = document.querySelector('#add-to-do')
const addToDoForm = document.querySelector<HTMLFormElement>('#add-to-do-form')
const toDoListNode = document.querySelector('#to-do-list')

export const home = ({currentToDoList, handleSubmitToDo}: Props): {buildHome: () => void}  => {

    const toggleToDoForm = () => {
        addToDoForm.classList.toggle('hidden')
    }

    const buildToDo = (todo: todo) => {
        const newToDoNode =  document.createElement("div")
        newToDoNode.textContent = todo.description 
    
        toDoListNode.appendChild(newToDoNode)
    }
    
    const buildToDoList = (toDoList: todo[]) => {
        toDoList.forEach(buildToDo)
    }

    const submitToDo = (e: Event) => {
        e.preventDefault()

         // construct a FormData object, which fires the formdata event
        const formData = new FormData(addToDoForm);
        const description = formData.get('description').toString()
        handleSubmitToDo(description)
        buildToDoList(currentToDoList)
    }

    const buildHome = () => {
        addToDo.addEventListener('click', toggleToDoForm)
        addToDoForm.addEventListener('submit', submitToDo)
    } 

    return ({buildHome})
}


