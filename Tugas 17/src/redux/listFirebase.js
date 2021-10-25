const defaultData = {
    listFB: []
}

const listFirebase = (state = defaultData, action) => {
    switch (action.type) {
        case "REGIS_FB":
            return {
                listFB: state.listFB.push(action.payload)
            }
    
        default:
            return state
    }
}

export default listFirebase