import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login } from "./Screen"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home"
            component={<Home />}
          />
          <Stack.Screen name="Login"
            component={<Login />} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;