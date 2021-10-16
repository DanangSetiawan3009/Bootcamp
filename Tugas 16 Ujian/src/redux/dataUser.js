const defaultState = {
    user: []
}

const dataUser = (state = defaultState, action) => { 
    switch (action.type) {
        case "REGISTER":
            return {
                user: state.user.push(action.payload)
            }

        default:
            return state
    }
}

export default dataUser