import ToDo, {todo} from './todo'

const App = () => {
    const currentToDoList = [] as todo[] 
    const projects = []
    let showToDo = false;

    const handleSubmitToDo = (description: string) => {
        const newToDo = {description}
        currentToDoList.push(newToDo)
    }

    return {currentToDoList, handleSubmitToDo}
}

export default App;