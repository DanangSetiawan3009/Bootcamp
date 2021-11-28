import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    async componentDidMount() {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((resp) => resp.json())
            .then((user) => {
                console.log("user: ", user);
                this.setState({
                    users: user
                })
            })
            .catch((e) => {
                console.log("Error: ", e)
                alert("Error")
            })
    }

    renderList = () => {
        return this.state.users.map((users, idx) => {
            return <tr key={idx}>
                <td align="center">{idx + 1}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td width="25" align="center">No</td>
                            <td width="200" align="center">Nama</td>
                            <td width="200" align="center">Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;