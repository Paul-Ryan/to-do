type Project = {
    name: string
}

const Project = (name: string): Project => {
    return ({name})
}

export default Project;