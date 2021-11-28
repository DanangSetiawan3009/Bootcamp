import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native"
import { Input, Button, Header } from "react-native-elements"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import { loginHandler } from "../Redux/Action/loginAction"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMsg: ""
        };
    }

    resetForm = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    loginBtn = () => {
        const { username, password } = this.state
        // if (username === "Danang" && password === "Asd") {
        //     Alert.alert("Sukses", "Selamat Anda Berhasil Login")
            return this.props.loginPress({username, password})
        // } else {
        //     this.resetForm()
        //     return Alert.alert("Gagal!", "Username/Password Salah")
        // }
    }

    static getDerivedStateFromProps(props, state) {
        return state = {
            errorMsg: props.loginMessage
        }
    }

    render() {
        return (
            <SafeAreaProvider>
                <ImageBackground style={styles.img} source={require("..//Assets//Image//bg.jpg")}>
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                        centerComponent={{ text: 'Login Page', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }} />
                    <View style={styles.container} >
                        <Text style={styles.text}>Login</Text>
                        <Input style={styles.input}
                            placeholder="Input Username"
                            onChangeText={username => this.setState({ username })} />
                        <Input style={styles.input}
                            placeholder="Input Password"
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry={true} />
                        <Button buttonStyle={styles.submit}
                            title={"Login"}
                            onPress={this.loginBtn} />
                    </View>
                </ImageBackground>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        flex: 1,
    },
    text: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: "bold",
        color: "black"
    },
    input: {
        borderWidth: 1,
        padding: 10,
        color: "black"
    },
    submit: {
        backgroundColor: "black"
    }
})

const mapStateToProps = state => ({
    loginMessage: state.loginReducer.message
})

// const actionCreators = Object.assign(
//     {},
//     loginHandler
// )

const mapDispatchToProps = dispatch => ({
    loginPress: data => loginHandler(data, dispatch)

    // doLogin: bindActionCreators(actionCreators, dispatch)

    // loginPress: data => dispatch({
    //     type: "LOGIN_SUKSES",
    //     payload: data
    // })
})

export default connect(mapStateToProps, mapDispatchToProps) (Login);