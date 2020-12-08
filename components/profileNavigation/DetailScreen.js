import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class DetailScreen extends Component {
    static navigationOptions = {
        title: "INFORMATION"
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Her skal man kunne se og rette sine oplysninger</Text>

            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 200,
        paddingBottom: 200,
    },
    text: {
        fontSize: 20,
    },
});
