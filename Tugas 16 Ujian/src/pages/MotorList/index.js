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
        }, 2000)
    }

    sewaMotor = () => {

    }

    renderList = () => {
        fetch("localhost:8080/api/motors", {
            method : "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((motor) => {
            console.log("motor", motor);

            localStorage.setItem('motor', motor)
            return motor.map((motor, idx) => {
                return <tr key={idx}>
                            <td>{idx +1}</td>
                            <td>{motor.jenis}</td>
                            <td>{motor.harga}</td>
                            <td><button onClick={this.sewaMotor}> Sewa </button></td>
                        </tr>
            })
        })
        .catch((err) => {
            console.log(err);
        })
        
    }

    render() {
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
                                <td width="200" align="center">Jenis Motor</td>
                                <td width="200" align="center">Harga</td>
                                <td width="200" align="center">Action</td>
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

const mapStateToProps = state => ({
    users: state.dataUser.user
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps) (index);