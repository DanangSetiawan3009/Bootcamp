import React, { Component } from 'react';
import Menu from "../components/menu";
import {Dropdown} from "react-bootstrap"

class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div style={{
                padding: 10,
                display: 'flex',
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "lightyellow",
                gap: 10
            }}>
                <Menu target="/">Home</Menu>
                <Menu target="/user">User List</Menu>
                <Menu target="/motor">List Motor</Menu>
                <Menu target="/register">Register</Menu>
                <Menu target="/login">Login</Menu>
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