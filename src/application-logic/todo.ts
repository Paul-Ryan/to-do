interface Props {
    description: string
}

export type ToDo = {
    description: string
}

// factory function to create to dos
const buildToDo = ({description}: Props): ToDo => {
    return {description}
}

export default buildToDo;