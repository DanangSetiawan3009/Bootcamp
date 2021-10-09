/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import {Login, UserList, Register, Home, FormEdit} from "../pages"

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                username: "Danang",
                password: "1234",
                address: "Semarang"
            }],
            selectedUser: -1
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
        this.props.goToPage("user")
    }

    // Tombol Login
    fnLogin = dataLogin => {
        // console.log(dataLogin);
        if(dataLogin === this.state.data) {
            this.props.goToPage("home")
        } else alert("username / password salah")
    }

    render() {
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
    }
}

export default Content;