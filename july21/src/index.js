import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import Firebase, { FirebaseContext } from "./firebase"
import Store from "./redux/store"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <FirebaseContext.Provider value={new Firebase()}>
      <App />
      </FirebaseContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
