import React, { Component } from 'react'
import {Table} from "react-bootstrap"
import {Spinner} from "react-bootstrap"
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
        fetch("http://localhost:8080/api/motors", {
            method : "GET",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => response.json())
        .then((motor) => {
            console.log("motor", motor);
            localStorage.setItem("motor", motor)
            this.props.getMotor(motor)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    sewaMotor = () => {
        fetch("http://localhost:8080/api/checkout", {
            method : "POST",
            mode : "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': "Bearer " + this.props.tokens
            }
        })
        .then((response) => response.json())
        .then((json) => {
            console.log("json", json);

            alert("Sewa Sukses")
            this.props.history.push("/user")
        })
    }

    renderList = () => {
        return this.props.motors.map((motor, idx) => {
            return <tr key={idx}>
                        <td>{idx +1}</td>
                        <td>{motor.jenis}</td>
                        <td>{motor.harga}</td>
                        <td align="center"><button onClick={this.sewaMotor}> Sewa </button></td>
                    </tr>
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
    motors: state.listMotor.motor,
    tokens: state.loginReducer.token
})

const mapDispatchToProps = dispatch => ({
    getMotor: motor => dispatch ({
        type: "GET_MOTOR",
        payload: motor
    })
})

export default connect(mapStateToProps, mapDispatchToProps) (index);