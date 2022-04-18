import {home} from './user-interface/home'
import App from './application-logic/app'

// set initial app state
const { currentToDoList, handleSubmitToDo } = App()
// setup events for homepage
const { buildHome } = home({currentToDoList, handleSubmitToDo})
buildHome()


