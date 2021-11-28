/* eslint-disable eqeqeq */
import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : ""
        };
    }

    inputValue = () => {
        if (this.state.username === "admin" && this.state.password === "1234") {
            this.props.goToPage("home")
        } else {
            alert("Username / Password Salah")
        }
    }

    render() {
        if (this.props.menu === "home") {
            return (
                <div style={{
                    padding: 20,
                    backgroundColor: "lightgrey"
                }}>
                    Welcome !
                </div>
            );
        }

        if (this.props.menu === "user") {
            return (
                <div style={{
                    padding: 20,
                    backgroundColor: "lightgrey"
                }}>
                    <table border="1" solid>
                        <thead>
                            <tr>
                                <td align="center" width="20">No</td>
                                <td align="center" width="150">Name</td>
                                <td align="center" width="75">Username</td>
                                <td align="center" width="250">Email</td>
                                <td align="center" width="50">City</td>
                                <td align="center" width="200" colSpan="2">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="center">1</td>
                                <td>Danang Setiawan</td>
                                <td>Danang</td>
                                <td>danangsetiawan648@gmail.com</td>
                                <td>Semarang</td>
                                <td align="center"><button>Edit</button></td>
                                <td align="center"><button>Delete</button></td>
                            </tr>
                            <tr>
                                <td align="center">2</td>
                                <td>Rahmat Amri Fatoni</td>
                                <td>Rahmat</td>
                                <td>rahmat4mri@gmail.com</td>
                                <td>Solo</td>
                                <td align="center"><button>Edit</button></td>
                                <td align="center"><button>Delete</button></td>
                            </tr>
                            <tr>
                                <td align="center">3</td>
                                <td>Maruli Asido</td>
                                <td>Maruli</td>
                                <td>maruli4sido@gmail.com</td>
                                <td>Jakarta</td>
                                <td align="center"><button>Edit</button></td>
                                <td align="center"><button>Delete</button></td>
                            </tr>
                            <tr>
                                <td align="center">4</td>
                                <td>Edi Kuswanto</td>
                                <td>Edi</td>
                                <td>edikuswanto@gmail.com</td>
                                <td>Jakarta</td>
                                <td align="center"><button>Edit</button></td>
                                <td align="center"><button>Delete</button></td>
                            </tr>
                            <tr>
                                <td align="center">5</td>
                                <td>Aldin</td>
                                <td>Aldin</td>
                                <td>aldin123@gmail.com</td>
                                <td>Surabaya</td>
                                <td align="center"><button>Edit</button></td>
                                <td align="center"><button>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        if (this.props.menu === "login") {
            return (
                <div style={{
                    padding: 20,
                    backgroundColor: "lightgrey"
                }}>
                    <div>
                        Username : <input type="text" name="username"></input>
                    </div>
                    <div>
                        Password : <input type="password" name="password"></input>
                    </div>
                    <input type="submit" value="Login" onClick={this.inputValue} />
                </div>
            );
        }
        // menu register
        return (
            <div style={{
                padding: 20,
                backgroundColor: "lightgrey"
            }}>
                <div>
                    Username : <input type="text" name="username"></input>
                </div>
                <div>
                    Password : <input type="password" name="password"></input>
                </div>
                <input type="submit" value="Register" onClick={this.regisUser} />
            </div>
        );
    }
}

export default Content;