import React, { Component } from 'react'
import "./menu.css"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="menu" onClick= {this.props.click}>
                {this.props.children}
            </div>
        );
    }
}

export default Menu;