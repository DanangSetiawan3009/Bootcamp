import React, { Component } from 'react'
import { Carousel } from '../../components';
import {connect} from "react-redux"

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: false
        };
    }

    toggleDisable = () => this.setState(prevState => ({disable: !prevState.disable}))
  
    buttonClick = (e) => {
        e.preventDefault();
        console.log('button clicked');
    }

    render() {
        return (
            <div style={{
                justifyContent: "center",
                alignContent: "center",
                padding: 20 
            }}>
                <h1>{this.props.valueRedux}</h1>
                <div style={{
                    width: 800,
                    height: 500,
                }}>
                <Carousel />
                </div>
                <div>
                    <button onClick={this.toggleDisable}>Toggle Disable</button>
                    <form>
                    <fieldset disabled={this.state.disable}>
                        <input />
                        <button onClick={this.buttonClick}>Button</button>
                    </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        valueRedux: state.username
    }
}

export default connect(mapStateToProps)(index);