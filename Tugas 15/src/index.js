import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";
import Firebase, { FirebaseContext } from "./firebase"


const defaultState ={
  statusLogin: false, 
  token: ""
}
const reducer = (state = defaultState, action) => {
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

const store = createStore(
  reducer,
  // untuk menambilkan debugging di extention chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
      <App />
      </FirebaseContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
