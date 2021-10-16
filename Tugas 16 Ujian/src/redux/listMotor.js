const defaultState = {
    motor: [{
        jenis: "Beat",
        harga: 100000
    }]
}

const listMotor = (state = defaultState, action) => { 
    switch (action.type) {
        case "GET_MOTOR":
            return {
                motor: state.motor.push(action.payload)
            }

        default:
            return state
    }
}

export default listMotor