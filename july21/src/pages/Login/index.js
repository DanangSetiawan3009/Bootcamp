import React, { Component } from 'react'
import "./login.css"

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    showText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetForm = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    loginButton = () => {
        const {username, password} = this.state
        // const dataLogin = {
        //     username, password
        // }
        // this.props.userLogin(dataLogin)
        if (username === "admin" && password === "123") {
            this.props.userLogin(true)
            this.resetForm()
            this.props.history.push("/") 
        } else alert("Username/Password Salah")
    }

    render() {
        return (
            <div>
                <div>
                    Username : <input type="text" name="username" onChange={this.showText} value={this.state.username} />
                </div>
                <div>
                    Password : <input type="password" name="password" onChange={this.showText} value={this.state.password} />
                </div>
                <div>
                    <button onClick={this.loginButton}>Login</button>
                </div>
            </div>
        );
    }
}

export default index;