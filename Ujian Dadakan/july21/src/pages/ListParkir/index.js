import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    listMotor = () => {
        return this.props.motors.map((user, idx) => {
            return <tr key={idx}>
                        <td>{idx +1}</td>
                        <td>{user.idx +1}</td>
                        <td>{user.date}</td>
                        <td align="center"><button onClick={() => this.props.setMotor(idx)}>Keluar</button></td>
                    </tr>
        })
    }

    listMobil = () => {
        return this.props.mobils.map((user, idx) => {
            return <tr key={idx}>
                        <td>{idx +1}</td>
                        <td>{user.idx +1}</td>
                        <td>{user.date}</td>
                        <td align="center"><button onClick={() => this.props.setMobil(idx)}>Keluar</button></td>
                    </tr>
        })
    }

    render() {
        return (
            <div>
                <div>
                <table border="1px solid black" cellPadding="10px">
                    <thead>
                        <tr>
                        <td width="25" align="center">No</td>
                            <td width="200" align="center">Costumer Motor</td>
                            <td width="200" align="center">Waktu</td>
                            <td width="50" align="center">Exit</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listMotor()}
                    </tbody>
                </table>
                </div>
                <div>
                <table border="1px solid black" cellPadding="10px">
                    <thead>
                        <tr>
                        <td width="25" align="center">No</td>
                        <td width="200" align="center">Costumer Mobil</td>
                            <td width="200" align="center">Waktu</td>
                            <td width="50" align="center">Exit</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listMobil()}
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default index;