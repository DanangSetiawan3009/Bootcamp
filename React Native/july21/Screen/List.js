import React, { Component } from 'react'
import { View, Text, FlatList, Alert, StyleSheet, TouchableOpacity } from "react-native"
import { ListItem } from "react-native-elements"
// import { Swipeable } from "react-native-gesture-handler"


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            limit: 15,
            loading: false,
            edituser: "",
            todos: []
        };
    }

    editForm = receive => {
        this.setState({
            editUser: receive
        })
    }

    fetchData = async () => {
        try {
            const { limit, page } = this.state
            const nextLoad = (page - 1) * limit

            this.setState({ loading: true })

            const responseData = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_start=${nextLoad}`)
            const responseJson = await responseData.json()
            console.log(responseJson);
            this.setState(oldState => {
                if (page == 1) {
                    return { todos: responseJson, loading: false }
                } else {
                    return { todos: [...oldState.todos, ...responseJson], loading: false }
                }
            })
        } catch (e) {
            console.log("Catch:", e);
            this.setState({ loading: false })
        }
    }

    resetPage = () => {
        this.setState({
            page: 1
        }, this.fetchData) // setelah koma, untuk menunggu setState selesai, kemudian memanggil fetching
    }

    nextPage = () => {
        this.setState(
            oldState => ({ page: oldState.page + 1 }),
            this.fetchData
        )
    }

    // leftAction = (progress, dragX) => {
    //     const scale = dragX.interpolate({
    //         inputRange: [0, 100],
    //         outputRange: [0, 1],
    //         extrapolate: "clamp"
    //     })

    //     return (
    //         <View style={styles.leftActions}>
    //             <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Add to Cart</Animated.Text>
    //         </View>
    //     )
    // }

    // swipeLeft = () => {
    //     Alert.alert("Show", "Sukses Add to Cart")
    // }

    // rightAction = (progress, dragX) => {
    //     const scale = dragX.interpolate({
    //         inputRange: [-100, 0],
    //         outputRange: [1, 0],
    //         extrapolate: "clamp"
    //     })

    //     return (
    //         <TouchableOpacity onPress={this.onPress}>
    //             <View style={styles.rightActions}>
    //                 <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Delete</Animated.Text>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }

    // onRightPress = () => {
    //     Alert.alert("Delete", "Sukses delete this item")
    // }

    componentDidMount() {
        this.fetchData()
    }

    rendering = items => {
        const { item } = items
        return (
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                    <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        )
    }

    render() {
        return (
            <FlatList
                keyExtractor={(data, idx) => idx.toString()}
                data={this.state.todos}
                renderItem={this.rendering}
                onRefresh={this.resetPage}
                refreshing={this.state.loading}
                onEndReachedThreshold={0.5}
                onEndReached={this.nextPage}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    leftAction: {
        backgroundColor: "yellow",
        justifyContent: "center",
        flex: 1
    },
    rightAction: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    actionText: {
        color: "orange",
        padding: 20
    }
})

export default List;