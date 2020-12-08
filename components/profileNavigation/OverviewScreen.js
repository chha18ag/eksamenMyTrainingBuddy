import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Image from "react-native-web/dist/exports/Image";
import DetailScreen from "./DetailScreen";

export default class OverviewScreen extends Component {
    static navigationOptions = {
        title: 'OVERSIGT'
    }

    handleGoToDetails = (route) => {
        this.props.navigation.navigate('INFORMATION');
    }




    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 35, color: 'grey'}}>MIN KONTO {"\n"}</Text>


                <TouchableOpacity style={styles.button} onPress={this.handleGoToDetails} >
                    <Text style={styles.buttonText} >MINE OPLYSNINGER</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => alert('KOMMER')}>
                    <Text style={styles.buttonText}>MINE ORDRER</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => alert('KOMMER')}>
                    <Text style={styles.buttonText}>ADRESSEBOG</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => alert('KOMMER')}>
                    <Text style={styles.buttonText}>BETALINGSMETODER</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button} onPress={() => alert('KOMMER')}>
                    <Text style={styles.buttonText}>HAR DU BRUG FOR HJÆLP</Text>
                </TouchableOpacity>

            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 100,
        paddingBottom: 100,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 220,
        height: 40,
        margin: 10,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: 'grey',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        marginStart: 5,
        marginEnd: 5,
    },
    text: {
        fontSize: 20,
    },
});
