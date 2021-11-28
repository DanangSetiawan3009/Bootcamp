import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Router from './Router';
import Store from './Redux/Store';
import {SQLite, SQLiteContext} from './Config/SQLite';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <SQLiteContext.Provider value={new SQLite()}>
            <Router />
          </SQLiteContext.Provider>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
