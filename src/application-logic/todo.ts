interface Props {
    description: string
}

export type todo = {
    description: string
}

// factory function to create to dos
const ToDo = ({description}: Props): todo => {
    return {description}
}

export default ToDo;