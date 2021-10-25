import React, { Component } from 'react';
import Menu from "../components/menu";
import {Dropdown} from "react-bootstrap"

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
                <Menu target="/">Home</Menu>
                <Menu target="/user">User List</Menu>
                <Menu target="/register" disabled={this.state.disable}>Register</Menu>
                <Menu target="/login">Login</Menu>
                <Menu target="/form">Edit Data</Menu>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        About
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Setting</Dropdown.Item>
                        <Dropdown.Item>Help</Dropdown.Item>
                        <Dropdown.Item>Exit</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default Menubar; 