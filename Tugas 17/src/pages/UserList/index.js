import React, { Component } from 'react'
import {Table} from "react-bootstrap"
import {Spinner} from "react-bootstrap"
// import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import {collection, getDocs, deleteDoc, updateDoc, doc} from "firebase/firestore"
import Firebase from '../../firebase/firebase';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    async componentDidMount () {
        const usersCollectionRef = collection(Firebase, "users")   
        const data = await getDocs(usersCollectionRef)
        this.setState({
            users: data.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
        })
        
    }

    editUser = async idx => {
        const userDoc = doc(Firebase, "users", idx);
        await updateDoc(userDoc);
    }

    dellUser = async idx => {
        const userDoc = doc(Firebase, "users", idx);
        await deleteDoc(userDoc);
    }

    renderList = () => {
        return this.props.users.map((user, idx) => {
            return <tr key={idx}>
                        <td>{idx +1}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td align="center"><button onClick={() => this.editUser(idx)}>Edit</button></td>
                        <td align="center"><button onClick={() => this.dellUser(idx)}>Delete</button></td>
                    </tr>
        })
    }

    logoutUser = () => {
        localStorage.removeItem()
        this.props.logOut()
        this.props.history.push("/login")
    }

    render() {
    //     if (!this.props.statLogin)
    //         return <Redirect to="/" />

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
                                <td width="200" align="center">Email</td>
                                <td width="200" align="center">Contact</td>
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
    users: state.listFirebase.listFB
})

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch ({
        type: "LOGOUT_OK"
    }) 
})

export default connect(mapStateToProps, mapDispatchToProps) (index);