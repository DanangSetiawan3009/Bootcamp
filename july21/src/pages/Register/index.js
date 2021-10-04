import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            address: ""
        };
    }

    showText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Tombol Registrasi
    regisButton = () => {
        const {username, password, address} = this.state
        const newUser = {
            username, password, address
        }
        this.props.addData(newUser)
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
                    Password : <input type="password" name="password" onChange={this.showText} value={this.state.password} />
                </div>
                <div>
                    Address : <input type="text" name="address" onChange={this.showText} value={this.state.address} />
                </div>
                    <button onClick={this.regisButton}>Register</button>
            </div>
        );
    }
}

export default index;