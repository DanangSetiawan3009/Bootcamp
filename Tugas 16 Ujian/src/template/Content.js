/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import {Login, UserList, Register, Home, MotorList} from "../pages"
import {Switch, Route} from "react-router-dom"

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                username: "Danang",
                password: "1234",
                address: "Semarang"
            }],
            selectedUser: -1,
            isLogin: false
        };
    }

    // Menambahkan data ke Register kemudian ditampilkan ke UserList
    addButton = newUser => {
        const newData = this.state.data
        newData.push(newUser)
        this.setState({
            data: newData
        })
        this.props.goToPage("user")
    }

    // Mengirim data index untuk dihapus
    deleteData = idx => {
        let datas = this.state.data
        datas.splice(idx, 1)
        this.setState({
            datas
        })
    }

    // Mengirim data index ke FormEdit untuk diEdit
    updateSelectedUser = idx => {
        this.setState({
            selectedUser: idx
        })
        this.props.goToPage("form")
    }

    // Menerima data yg telah diEdit 
    receiveUpdate = updated => {
        const {selectedUser, data: oldData} = this.state

        oldData.splice(selectedUser, 1, updated)
        this.setState({
            data: oldData,
            selectedUser: -1
        })
    }

    // Function Login
    fnLogin = status => {
        // console.log(dataLogin);
        this.setState({
            isLogin: status
        })
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/user" children={(props) => <UserList {...props}
                            users={this.state.data} 
                            dellUser={this.deleteData} 
                            setUser={this.updateSelectedUser} 
                            statusLogin={this.state.isLogin} />} />
                <Route path="/motor" children={(props) => <MotorList {...props} />} />
                <Route path="/register" children={() => <Register addData={this.addButton}/> } />
                <Route path="/login" children={(props) => <Login {...props} userLogin={this.fnLogin}/> } />
            </Switch>
        )
    }
}

export default Content;