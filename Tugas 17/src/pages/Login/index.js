import React, { Component } from 'react'
import "./login.css"
import { connect } from 'react-redux';
import {FirebaseContext} from '../../firebase';

class LoginFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
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

    // regisFirebase = () => {
    //     const { email, password } = this.state
    //     this.props.firebase.createUser({
    //         email, password
    //     })
    //     .then(userCredentialRegis => {
    //         console.log("userCredential: ", userCredentialRegis);
    //         this.props.registerFirebase(userCredentialRegis)
    //         alert("User created!")
    //     })
    //     .catch( err => {
    //         console.warn("ERROR: ", err)
    //         alert(err.message)
    //     })
    // }

    // loginFirebase = () => {
    //     const { email, password } = this.state
    //     this.props.firebase.loginUser({
    //         email, password
    //     })
    //     .then(userCredential => {
    //         const user = userCredential.user
    //         console.log(user);
    //         alert("Sukses login")
    //         this.props.history.push("/")
    //         this.props.loginFirebase()
    //     })
    //     .catch(err => {
    //         alert("Email / Password Salah!")
    //     })
    // }
    
    render() {
        return (
            <div>
                <div>
                    Username : <input type="text" name="username" onChange={this.showText} value={this.state.username} />
                </div>
                <div>
                    Email : <input type="email" name="email" onChange={this.showText} value={this.state.email} />
                </div>
                <div>
                    Password : <input type="password" name="password" onChange={this.showText} value={this.state.password} />
                </div>
                <div> 
                    <h1>statusLogin: {this.props.statusLogin.toString()}</h1>
                </div>
                <div>
                    <button onClick={this.loginButton}>Login</button>
                </div>
                <div>
                    <button onClick={this.regisFirebase}>Regis Firebase</button>
                </div>
                <div>
                    <button onClick={this.loginFirebase}>Login Firebase</button>
                </div>
            </div>
        );
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <LoginFirebase {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
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
    }),

    registerFirebase: userCredentialRegis => dispatch({
        type: "REGIS_FB",
        payload: userCredentialRegis
    })
})

export default connect(mapStateToProps, mapDispatchToProps) (Login);