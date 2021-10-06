/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import {Parkir, CardParkir, ListParkir} from "../pages"

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            motor : [],
            mobil : [],
            costMasuk : {}
        };
    }

    motorEnter = (entry) => {
        this.setState ({
            motor: entry
        })
        // moment().format('LTS'); 
        this.props.goToPage("card")
    }

    mobilEnter = (entry) => {
        this.setState ({
            mobil: entry
        })
        // moment().format('LTS'); 
        this.props.goToPage("card")
    }

    render() {
        if (this.props.menu === "card") {
            return <CardParkir card={this.state.costMasuk}/>
        }

        if (this.props.menu === "list") {
            return <ListParkir motors={this.state.motor} mobils={this.state.mobil} />
        }
        // Menu Parkir Home
        return <Parkir motorIn={this.motorEnter} mobilIn={this.mobilEnter} />
    }
}

export default Content;