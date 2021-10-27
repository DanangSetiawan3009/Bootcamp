import React, { Component } from 'react'
// import { StyleSheet } from "react-native"
import { Home, Login, } from "./Screen"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      loginAkun: "",
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ users: [...users, ...users] }))
}

  fnLogin = status => {
    this.setState({ 
      login: status 
    })
  }

  userInfo = userr => {
    this.setState({ 
      loginAkun: userr 
    })
  }

  render() {
    if (this.state.login)
      return <Home loginAkun={this.state.loginAkun}
      datas={this.state.users} />

    return <Login setLogin={this.fnLogin} 
      data={this.state.users} 
      userInfo={this.userInfo} />
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column"
//   }
// })

export default App;