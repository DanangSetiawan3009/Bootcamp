import React, { Component } from 'react'
import { Carousel } from '../../components';
import {connect} from "react-redux"

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
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