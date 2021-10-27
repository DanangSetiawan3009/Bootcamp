import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements"


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            city: ""
        };
    }

    editForm = () => {
        const { name, email, city } = this.state
        const editedUser = {name, email, city}
        this.props.sendEdit(editedUser)
    }

    render() {
        return (
            <View style={styles.container} >
                <Input style={styles.input}
                    placeholder="Edit your Name"
                    onChangeText={name => this.setState({ name })} />
                <Input style={styles.input}
                    placeholder="Edit your email"
                    onChangeText={email => this.setState({ email })} />
                <Input style={styles.input}
                    placeholder="Edit your city"
                    onChangeText={city => this.setState({ city })} />
                <Button style={styles.submit}
                title="Edit"
                onPress={this.editForm} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        padding: 10,
        color: "black"
    }
})

export default Edit;