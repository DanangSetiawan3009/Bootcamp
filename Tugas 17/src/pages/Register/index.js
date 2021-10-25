import React, { Component } from 'react'
import {collection, addDoc} from "firebase/firestore"
import Firebase from '../../firebase/firebase';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            age: 0
        };
    }

    showText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Tombol Registrasi
    regisButton = async () => {
        const usersCollectionRef = collection(Firebase, "users")
        const {username, email, age} = this.state
        const newUser = {
            username, email, age
        }
        await addDoc(usersCollectionRef, {newUser})
    }

    render() {
        return (
            <div style={{
                padding: 20,
                backgroundColor: "lightgrey"
            }}>
                <div>
                    Username : <input type="text" name="username" onChange={this.showText} value={this.state.username} /> 
                </div>
                <div>
                    Password : <input type="email" name="email" onChange={this.showText} value={this.state.email} />
                </div>
                <div>
                    Address : <input type="number" name="age" onChange={this.showText} value={this.state.age} />
                </div>
                    <button onClick={this.regisButton}>Register</button>
            </div>
        );
    }
}

export default index;