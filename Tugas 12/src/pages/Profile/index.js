import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        if(this.props.users) {
            return <h2>Hi {this.props.users} </h2>
        }

        return (
            <div>
                <h2>You're not logged in </h2>
            </div>
        );
    }
}

export default index;