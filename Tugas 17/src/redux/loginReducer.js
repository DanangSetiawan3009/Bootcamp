const defaultState ={
  statusLogin: false, 
  token: ""
}

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "LOGIN_OK":
        return {
          statusLogin: true,
          token: action.payload
        }
      
      case "LOGIN_FB":
        return {
          statusLogin: true
        }
  
      case "LOGOUT_OK":
        return {
          statusLogin: false
        }
       
      default:
        return state
    }
  }

export default loginReducer