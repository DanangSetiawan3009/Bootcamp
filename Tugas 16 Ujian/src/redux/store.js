import { combineReducers, createStore } from 'redux';
import dataUser from "./dataUser"
import loginReducer from './loginReducer';
import listMotor from "./listMotor"

const allReducer = combineReducers({
    loginReducer, dataUser, listMotor
})

const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store