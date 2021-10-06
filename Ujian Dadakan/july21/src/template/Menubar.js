import React, { Component } from 'react';
import Menu from "../components/menu";

class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                <Menu click={() => this.props.goToPage("parkir")}>Masuk</Menu>
                <Menu click={() => this.props.goToPage("card")}>Kartu Parkir</Menu>
                <Menu click={() => this.props.goToPage("list")}>List Parkir</Menu>
            </div>
        );
    }
}

export default Menubar; 