import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    masukCard = () => {
        return this.props.card.map((user, idx) => {
            return <tr key={idx}>
                        <td>{idx +1}</td>
                        <td>{user.idx +1}</td>
                        <td>{user.date}</td>
                        <td align="center"><button onClick={() => this.props.setCard(idx)}>Check</button></td>
                    </tr>
        })
    }
    
    render() {
        return (
            <div>
                <table border="1px solid black" cellPadding="10px">
                    <thead>
                        <tr>
                            <td width="500" height="500" align="center" colSpan="4">WELCOME Costumer Motor</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.masukCard()}
                    </tbody>
                </table>
                </div>
        );
    }
}

export default index;