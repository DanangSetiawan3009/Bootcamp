import React, { Component } from 'react';
import {Menubar, Content} from "./template"; 
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
            <>
                <Menubar goToPage={this.selectPage} />
                <Content menu={this.state.menu} goToPage={this.selectPage} />
            </>
        );
    }
}

export default App;