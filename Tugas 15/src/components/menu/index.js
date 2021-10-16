import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./menu.css"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Link to={this.props.target}> 
                <div className="menu">
                    {this.props.children}
                </div>
            </Link> 
        );
    }
}

export default Menu;