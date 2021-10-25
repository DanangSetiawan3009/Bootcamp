import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native"
import { Input, Button, Header } from "react-native-elements"
import { SafeAreaProvider } from "react-native-safe-area-context"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "Danang",
                password: "123"
            },
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

    loginBtn = navigation => {
        const { username, password, data } = this.state
        if (username === data.name && password === data.password) {
            this.resetForm()
            Alert.alert("Sukses", "Selamat Anda Berhasil Login")
            navigation.navigate('Login')
        } else {
            Alert.alert("Gagal!", "Username/Password Salah")
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