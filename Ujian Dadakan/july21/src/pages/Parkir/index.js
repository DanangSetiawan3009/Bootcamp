import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>
                Parkir Motor :
                <button onClick={this.props.motorIn}>Masuk</button>
                </div>
                <div>
                Parkir Mobil :
                <button onClick={this.props.MobilIn}>Masuk</button>
                </div>
            </div>
        );
    }
}

export default index;