import React, { Component } from 'react'
import {Table} from "react-bootstrap"
import {Spinner} from "react-bootstrap"
import {Link, Redirect} from "react-router-dom"

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount () {
        setTimeout(() => {
        this.setState({loading: false})
        }, 1000)
    }

    renderList = () => {
        return this.props.users.map((user, idx) => {
            return <tr key={idx}>
                        <td>{idx +1}</td>
                        <td>{user.username}</td>
                        <td>{user.address}</td>
                        <td align="center"><Link to={`/form/${idx}`}>Edit</Link></td>
                        <td align="center"><button onClick={() => this.props.dellUser(idx)}>Delete</button></td>
                    </tr>
        })
    }

    render() {
        if (!this.props.statusLogin)
            return <Redirect to="/" />

        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding : 20
            }}>
                {this.state.loading ?
                    <Spinner animation="border" />
                    :
                    <div> 
                    <Table striped bordered hover variant="dark">
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
                    </Table> 
                    </div>
                }
            </div>
        );
    }
}

export default index;