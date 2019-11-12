const initState = {
    projects: [
        {id: 1, title: "One side", content: "Text Content 1"},
        {id: 2, title: "Two side", content: "Text Content 2"},
        {id: 3, title: "Three side", content: "Text Content 3"},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project) 
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
        default:
            return state
    }
}

export default projectReducer