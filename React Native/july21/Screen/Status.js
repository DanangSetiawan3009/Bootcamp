import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native"


class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.myStatus}>
                    <Text>My Status</Text>
                </View>
                <View style={styles.info}>
                    <Text>Recent updates</Text>
                </View>
                <View style={styles.status}>
                    <Text>Status 1</Text>
                    <Text>Status 2</Text>
                    <Text>Status 3</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    myStatus: {
        height: 75,
        justifyContent: "center",
        alignItems: "center"
    },
    info: {
        backgroundColor: "grey"
    },
    status: {
        height: 75,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
})

export default Status;