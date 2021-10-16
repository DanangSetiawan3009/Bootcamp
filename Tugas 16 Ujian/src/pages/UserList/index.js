import React, { Component } from 'react'
import {Table} from "react-bootstrap"
import {Spinner} from "react-bootstrap"
import {Link, Redirect} from "react-router-dom"
import { connect } from 'react-redux';

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

    logoutUser = () => {
        localStorage.removeItem()
        this.props.logOut()
        this.props.history.push("/login")
    }

    render() {
        if (!this.props.statLogin)
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
                    <button onClick={this.logoutUser} >Log Out</button>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    statLogin: state.loginReducer.statusLogin,
    users: state.dataUser.user
})

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch ({
        type: "LOGOUT_OK"
    }) 
})

export default connect(mapStateToProps, mapDispatchToProps) (index);