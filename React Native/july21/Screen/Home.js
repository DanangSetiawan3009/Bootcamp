import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from "react-native"
import { Header } from "react-native-elements"
import List from "./List"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ImageBackground style={styles.img} source={require("..//Assets//Image//bg.jpg")}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Home Page', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }} />
                <View style={styles.container}>
                    <View style={styles.teks}>
                        <Text>Hai {this.props.loginAkun}</Text>
                    </View>
                    <View style={styles.list}>
                        <List users={this.props.datas} />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "50%"
    },
    img: {
        flex: 1,
    },
    teks: {
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 3,
    },
    list: {
        flex: 1
    }
})

export default Home;