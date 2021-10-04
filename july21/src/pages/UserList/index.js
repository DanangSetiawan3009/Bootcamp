import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderList = () => {
        return this.props.users.map((user, idx) => {
            return <tr key={idx}>
                        <td>{idx +1}</td>
                        <td>{user.username}</td>
                        <td>{user.address}</td>
                        <td align="center"><button onClick={this.props.editD}>Edit</button></td>
                        <td align="center"><button onClick={this.props.dell}>Delete</button></td>
                    </tr>
        })
    }

    render() {
        return (
            <table border="1px solid black" cellPadding="10px">
                <thead>
                    <tr>
                    <td width="25" align="center">No</td>
                        <td width="200" align="center">Username</td>
                        <td width="200" align="center">Address</td>
                        <td width="200" colSpan="2" align="center">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        );
    }
}

export default index;