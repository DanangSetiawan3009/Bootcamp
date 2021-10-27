import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native"
import { Input, Button, Header } from "react-native-elements"
import { SafeAreaProvider } from "react-native-safe-area-context"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
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
        const user = this.props.data
        for (let index = 0; index < user.length; index++) {
            const datas = user[index];
            console.log(datas);
            if (username === datas.name && password === datas.username) {
                const userLogin = datas.name
                this.props.userInfo(userLogin)
                Alert.alert("Sukses", "Selamat Anda Berhasil Login")
                return this.props.setLogin(true)
            } else {
                this.resetForm()
                return Alert.alert("Gagal!", "Username/Password Salah")
            }
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

export default Login;