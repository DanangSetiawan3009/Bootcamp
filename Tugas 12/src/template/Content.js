/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import {Login, UserList, Register, Home, FormEdit, Profile} from "../pages"
import {Switch, Route} from "react-router-dom"
import axios from "axios"

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
            isLogin: false,
            isUser: false,
            user: ""
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
    // fnLogin = status => {
    //     // console.log(dataLogin);
    //     this.setState({
    //         isLogin: status
    //     })
    // }

    componentDidMount() {
        const config = {
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            }
        }

        axios.get("http://localhost:3000/", config).then(
            res => {
                this.setState({
                    user: res.data
                })
            },
            err => {
                console.log(err);
            }
        )
    }

    render() {

        if(this.state.user) {
            return (
                <Route path="/profile" children={() => <Profile users={this.state.user}/>} />
            )
        }

        return (
            <Switch>
                {/* exact untuk menentukan halaman home */}
                <Route path="/" exact component={Home} />
                {/* diapit didalam Route tidak bisa mengambil props default */}
                <Route path="/user">
                    <UserList users={this.state.data} dellUser={this.deleteData} setUser={this.updateSelectedUser} statusLogin={this.state.isLogin} />
                </Route>
                {/* didalam tag Route bisa mengambil props default : history, location, match */}
                {
                    // this.state.isLogin &&
                <Route path="/register" children={() => <Register addData={this.addButton}/> } />}
                <Route path="/login" children={(props) => <Login {...props} userLogin={this.fnLogin}/> } />
                <Route path="/form" children={(props) => <FormEdit {...props} editUser={this.receiveUpdate}/>} />
            </Switch>
        )
        /*
        if(this.props.menu === "login") {
            return <Login userLogin={this.fnLogin} />
        }

        if (this.props.menu === "user") {
            return <UserList 
                users={this.state.data} 
                dellUser={this.deleteData} 
                setUser={this.updateSelectedUser} />
        }
        
        if (this.props.menu === "register") {
            return <Register addData={this.addButton} />
        }

        if (this.props.menu === "form") {
            return <FormEdit editUser={this.receiveUpdate}/>
        }

        // Menu home sebagai default
        return (
            <Home />
        );
        */
    }
}

export default Content;