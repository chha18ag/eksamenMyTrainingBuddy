import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';


export default class HomeScreen extends Component {

    state={
        email: null
    };

//kalder navigationen i viewet og tilføjer tekst
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Image source={require('../assets/fitguy1.jpg')}/>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={require('../assets/fitgirl1.jpg')}/>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={require('../assets/fitguy2.jpg')}/>
                    </View>
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        color: 'black',
        fontSize: 20,
        paddingRight:20,
        paddingLeft: 20,
    },
    text2: {
        color: 'black',
        fontSize: 25,
        paddingRight:20,
        paddingLeft: 20,
        alignItems: 'center',
    },
    wrapper: {
    },
    logo: {
        padding: 50,
        height: 200,
        width: 200,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});
