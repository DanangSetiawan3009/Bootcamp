import React, { Component } from 'react'
// import "./login.css"
import { connect } from 'react-redux';

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

    resetForm = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    loginButton = () => {
    //     const {username, password} = this.state
    //     // const dataLogin = {
    //     //     username, password
    //     // }
    //     // this.props.userLogin(dataLogin)
    //     if (username === "admin" && password === "123") {
    //         this.props.userLogin(true)
    //         this.resetForm()
    //         this.props.history.push("/") 
    //     } else alert("Username/Password Salah")
        const { username, password } = this.state;
        const user = {
            username, password
        }

        fetch("http://localhost:8080/api/authentication", {
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
        .then((token) => {
            console.log("token", token);

            localStorage.setItem('token', token)
            this.props.loginHandler(token)
            this.props.history.push("/")
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
                boxSizing: "border-box",
                padding: 20
            }}>
                <label> Username : </label>
                    <input type="text" name="username" onChange={this.showText} value={this.state.username} placeholder="Username"/>
                <label> Password : </label>
                    <input type="password" name="password" onChange={this.showText} value={this.state.password} placeholder="Password" />
                <label> 
                    <h2>statusLogin: {this.props.statusLogin.toString()}</h2>
                </label>
                <div align="center">
                    <button onClick={this.loginButton}>Login</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    statusLogin: state.loginReducer.statusLogin
})

const mapDispatchToProps = dispatch => ({
    loginHandler: token => dispatch({
        type: "LOGIN_OK",
        payload: token
    }),

    loginFirebase: () => dispatch({
        type: "LOGIN_FB"
    })
})

export default connect(mapStateToProps, mapDispatchToProps) (index);