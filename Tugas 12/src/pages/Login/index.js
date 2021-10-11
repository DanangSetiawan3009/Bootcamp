import React, { Component } from 'react'
import axios from "axios"
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

    // loginButton = async () => {
    //     const {username, password} = this.state
    //     let item = {username, password}
    //     let result = await fetch("http://localhost:3000/login/profile", {
    //         method: "POST",
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Accept":"application/json"
    //         },
    //         body:JSON.stringify(item)
    //     })
    //     result = await result.json()
    //     localStorage.setItem("user-info", JSON.stringify(result))
    //     this.props.history.push("/")


    //     // const dataLogin = {
    //     //     username, password
    //     // }
    //     // this.props.userLogin(dataLogin)

        
    //     // if (username === "admin" && password === "123") {
    //     //     this.props.userLogin(true)
    //     //     this.resetForm()
    //     //     this.props.history.push("/") 
    //     // } else alert("Username/Password Salah")
    // }

    handleSubmit = e => {
        e.prefentDefault()

        const data ={
            username: this.state.username,
            password: this.state.password
        }

        axios.post("http://localhost:3000/login", data)
            .then(res => {
                localStorage.setItem("token", res.data.token)
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Username : <input type="text" name="username" onChange={this.showText} value={this.state.username} />
                    </div>
                    <div>
                        Password : <input type="password" name="password" onChange={this.showText} value={this.state.password} />
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default index;