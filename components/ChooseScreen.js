import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class ChooseScreen extends Component {
    static navigationOptions = {
        title: 'Test'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Kommer snart</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    containerBox: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        flexDirection: 'row',
        width:'100%'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        width: '100%',
    },
    text: {
        fontSize: 25,
    },
    imageText: {
        alignItems: 'center',
        fontSize: 16,
        marginEnd: 30,
        marginStart: 30,
        color: 'red',
    },
    images: {
        height: 110,
        width: 110,
    }
});

