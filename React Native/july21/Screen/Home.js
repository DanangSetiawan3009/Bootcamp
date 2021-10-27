import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from "react-native"
import { Header } from "react-native-elements"


class Home extends Component {
    constructor(props) {
        super(props);
        this.months = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September", "October",
            "November", "December"];
        this.weekDays = [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ]
        this.nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.state = {
            hariSekarang: new Date()
        };
    }

    generateMatrix() {
        const matrix = [];
        matrix[0] = this.weekDays;

        const year = this.state.hariSekarang.getFullYear();
        const month = this.state.hariSekarang.getMonth();
        const firstDay = new Date(year, month, 1).getDay();

        const maxDays = this.nDays[month];
        if (month == 1) { // February
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                maxDays += 1;
            }
        }

        const counter = 1;
        for (const row = 1; row < 7; row++) {
            matrix[row] = [];
            for (const col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row == 1 && col >= firstDay) {
                    matrix[row][col] = counter++;
                } else if (row > 1 && counter <= maxDays) {
                    matrix[row][col] = counter++;
                }
            }
        }
        return matrix;
    }

    onPress = item => {
        this.setState(() => {
            if (!item.match && item != -1) {
                this.state.hariSekarang.setDate(item);
                return this.state;
            }
        });
    };

    render() {
        const matrix = this.generateMatrix()

        const rows = [];
        rows = matrix.map((row, rowIndex) => {
            const rowItems = row.map((item, colIndex) => {
                return (
                    <Text
                        style={{
                            flex: 1,
                            height: 18,
                            textAlign: "center",
                            backgroundColor: rowIndex == 0 ? "#ddd" : "#fff",
                            color: colIndex == 0 ? "#a00" : "#000",
                            fontWeight: item == this.state.hariSekarang.getDate() ? "bold" : ""
                        }}
                        onPress={() => this.onPress(item)}>
                        {item != -1 ? item : ""}
                        {rows}
                    </Text>
                );
            });

            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        padding: 15,
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                    {rowItems}
                </View>
            );
        });

        return (
            <ImageBackground style={styles.img} source={require("..//Assets//Image//bg.jpg")}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Home Page', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }} />
                <View>
                    <Text style={styles.teks}>
                        {this.months[this.state.hariSekarang.getMonth()]}
                        {this.state.hariSekarang.getFullYear()}
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        flex: 1
    },
    teks: {
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 1,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default Home;