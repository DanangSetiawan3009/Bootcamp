import React, { Component } from 'react'
import { connect } from "react-redux"

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
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightgrey"
            }}>
                <div>
                    Username : <input type="text" name="username" onChange={this.showText} value={this.state.username} /> 
                </div>
                <div>
                    Password : <input type="password" name="password" onChange={this.showText} value={this.state.password} />
                </div>
                    <button onClick={this.regisButton}>Register</button>
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