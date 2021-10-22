import React, { Component } from 'react'
import { connect } from "react-redux"
// import "./regis.css"

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    showText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Tombol Registrasi
    regisButton = () => {
        const {username, password} = this.state
        const user = {
            username, password
        }

        fetch("http://localhost:8080/api/register", {
            method : "POST",
            mode : "cors",
            body : JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => response.json())
        .then((newUser) => {
            console.log("newUser", newUser);

            localStorage.setItem('newUser', newUser)
            this.props.regisHandler(newUser)
            alert("Registrasi Sukses")
            this.props.history.push("/user")
        })
        .catch((err) => {
            console.log(err);
        })

    }

    render() {
        return (
            <div style={{
                display: "inline-block",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightgrey",
                padding: 20
            }}>
                <label> Username : </label>
                    <input type="text" name="username" onChange={this.showText} value={this.state.username} placeholder="Username" /> 
                <label> Password : </label>
                    <input type="password" name="password" onChange={this.showText} value={this.state.password} placeholder="Password" />
                <div align="center">
                    <button onClick={this.regisButton}>Register</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    regisHandler: newUser => dispatch ({
        type: "REGISTER",
        payload: newUser
    })
})

export default connect(null, mapDispatchToProps) (index);