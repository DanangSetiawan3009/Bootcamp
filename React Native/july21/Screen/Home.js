import React, { Component } from 'react'
import { Tab } from "react-native-elements"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ImageBackground style={styles.img} source={require("..//Assets//Image//bg.jpg")}>
                <Tab value={index} onChange={setIndex}>
                    <Tab.Item title="recent" />
                    <Tab.Item title="favorite" />
                    <Tab.Item title="cart" />
                </Tab>
                <TabView value={index} onChange={setIndex} >
                    <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
                        <Text h1>Recent</Text>
                    </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                        <Text h1>Favorite</Text>
                    </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                        <Text h1>Cart</Text>
                    </TabView.Item>
                </TabView>
                <View style={styles.container} >
                    <Text>Ini Home Page~</Text>
                </View>
            </ImageBackground>
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
    }
})

export default Home;