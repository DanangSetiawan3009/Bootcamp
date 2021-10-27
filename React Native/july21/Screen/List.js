import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from "react-native"
import { ListItem } from "react-native-elements"
import Edit from "./Edit"



class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editUser: ""
        };
    }

    editForm = receive => {
        this.setState({
            editUser: receive
        })
    }

    rendering = items => {
        const { item } = items
        return (
            <ListItem bottomDivider onPress={() => <Edit sendEdit={this.editForm} />} >
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.address.city}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        )
    }

    render() {
        return (
            <FlatList
                keyExtractor={(None, idx) => idx.toString()}
                data={this.props.users}
                renderItem={this.rendering}
            />
        );
    }
}

export default List;