/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import {Login, UserList, Register, Home} from "../pages"

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                username: "Danang",
                password: "1234",
                address: "Semarang"
            }]
        };
    }

    addButton = newUser => {
        const newData = this.state.data
        newData.push(newUser)
        this.setState({
            data: newData
        })
        this.props.goToPage("user")
    }

    deleteData = () => {
        delete this.state.data
    }

    editData = () => {
        this.setState({

        })
    }

    // Tombol Login
    fnLogin = dataLogin => {
        if(dataLogin === this.state.data) {
            this.props.goToPage("home")
        } else alert("username / password salah")
    }

    render() {
        if(this.props.menu === "login") {
            return <Login userLogin={this.fnLogin} />
        }

        if (this.props.menu ==="user") {
            return <UserList 
                users={this.state.data} 
                dell={this.deleteData} 
                editD={this.editData} />
        }
        
        if (this.props.menu === "register") {
            return <Register addData={this.addButton} />
        }

        // Menu home sebagai default
        return (
            <Home />
        );
    }
}

export default Content;