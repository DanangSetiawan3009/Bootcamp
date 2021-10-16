const defaultState = {
    motor: []
}

const listMotor = (state = defaultState, action) => { 
    switch (action.type) {
        case "REGISTER":
            return {
                motor: state.motor.push(action.payload)
            }

        default:
            return state
    }
}

export default listMotor