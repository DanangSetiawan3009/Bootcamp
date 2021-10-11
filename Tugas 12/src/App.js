import React, { Component } from 'react';
import {Menubar, Content} from "./template"; 
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu : "home"
        };
    }

    selectPage = page => {
        this.setState({
          menu: page
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Router>
                    <Menubar goToPage={this.selectPage} />
                    <Content menu={this.state.menu} goToPage={this.selectPage} />
                </Router>
            </div>
        );
    }
}

export default App;