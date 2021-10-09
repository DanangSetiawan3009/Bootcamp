import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            address: ""
        };
    }

    showText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateButton = () => {
        const {username, address} = this.state
        const updated = {
            username, address
        }
        this.props.editUser(updated)
    }

    componentDidMount() {
        const { username, address } = this.props.editUser
        this.setState({
            username, address
        })
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
                    Address : <input type="text" name="address" onChange={this.showText} value={this.state.address} />
                </div>
                    <button onClick={this.updateButton}>Update</button>
            </div>
        );
    }
}

export default index;