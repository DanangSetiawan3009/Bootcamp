import React, { Component } from 'react';
import Menu from "../components/menu";

class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: false
        };
    }

    handleDisable = () => {
        this.setState({
            disable: true
        })
    }

    render() {
        return (
            <div style={{
                padding: 10,
                display: 'flex',
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10
            }}>
                <Menu click={() => this.props.goToPage("home")}>Home</Menu>
                <Menu click={() => this.props.goToPage("user")}>User List</Menu>
                <Menu disabled={this.state.disable} click={() => this.props.goToPage("register")}>Register</Menu>
                <Menu click={() => this.props.goToPage("login")}>Login</Menu>
                <Menu click={() => this.props.goToPage("form")}>Edit Data</Menu>
            </div>
        );
    }
}

export default Menubar; 