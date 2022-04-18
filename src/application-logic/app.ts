import {ToDo} from './todo'

const App = () => {
    const currentToDoList = [] as ToDo[] 
    const projects = []
    let showToDo = false;

    const handleSubmitToDo = (description: string) => {
        const newToDo = {description}
        currentToDoList.push(newToDo)
    }

    return {currentToDoList, handleSubmitToDo}
}

export default App;