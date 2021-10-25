import { combineReducers , createStore} from "redux"
import loginReducer from "./loginReducer"
import listFirebase from "./listFirebase"

const allReducer = combineReducers({
    loginReducer, listFirebase
})

const store = createStore(
    allReducer,
    // untuk menambilkan debugging di extention chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store