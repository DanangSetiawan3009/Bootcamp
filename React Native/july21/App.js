import React, { Component } from 'react'
import { View, StyleSheet, Alert } from "react-native"
import { Header } from "react-native-elements"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Call, Status, List } from "./Screen"


const Tab = createMaterialTopTabNavigator()
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  fnLogin = status => {
    this.setState({
      login: status
    })
  }

  setMenu = () => {
    return (
      <Tab.Navigator initialRouteName="Call">
        <Tab.Screen name="Call">
          {props => <List {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Call" component={Call} />
      </Tab.Navigator>
    )
  }

  render() {
    return (
      <NavigationContainer>
        {this.setMenu()}
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
})

export default App;