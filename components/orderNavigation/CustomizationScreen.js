import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, YellowBox, Image} from 'react-native';
import {Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";

export default class CustomizationScreen extends Component {
    static navigationOptions = {
        title: 'measurement'
    }
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning'
        ]);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>SKRÆDDERSY DIT MØBEL</Text>
                </View>

                <View style={styles.container2}>
                    <MenuProvider style={{alignItems: 'center', justifyContent: 'center', padding: 50}}>
                        <Menu onSelect={value => alert(`Du valgte: ${value}`)}>

                            <MenuTrigger  >
                                <Text style={styles.headerText}>VÆLG MATERIALE</Text>
                            </MenuTrigger  >

                            <MenuOptions>
                                <MenuOption value={"Ahorn"}>
                                    <Text style={styles.menuContent}>Ahorn</Text>
                                </MenuOption>
                                <MenuOption value={"Bøg"}>
                                    <Text style={styles.menuContent}>Bøg</Text>
                                </MenuOption>
                                <MenuOption value={"Eg"}>
                                    <Text style={styles.menuContent}>Eg</Text>
                                </MenuOption>
                                <MenuOption value={"Kirsebær"}>
                                    <Text style={styles.menuContent}>Kirsebær</Text>
                                </MenuOption>
                                <MenuOption value={"Mahagoni"}>
                                    <Text style={styles.menuContent}>Mahagoni</Text>
                                </MenuOption>
                                <MenuOption value={"Valnød"}>
                                    <Text style={styles.menuContent}>Valnød</Text>
                                </MenuOption>

                            </MenuOptions>

                        </Menu>
                    </MenuProvider>


                </View>
                <View style={styles.container2}>
                    <MenuProvider style={{alignItems: 'center', justifyContent: 'center', padding: 50}}>
                        <Menu onSelect={value => alert(`Du valgte: ${value}`)}>

                            <MenuTrigger  >
                                <Text style={styles.headerText}>VÆLG FARVE</Text>
                            </MenuTrigger  >

                            <MenuOptions>
                                <MenuOption value={"Hvid"}>
                                    <Text style={styles.menuContent}>Hvid</Text>
                                </MenuOption>
                                <MenuOption value={"Sort"}>
                                    <Text style={styles.menuContent}>Sort</Text>
                                </MenuOption>
                                <MenuOption value={"Naturlig træfarve"}>
                                    <Text style={styles.menuContent}>Naturlig træfarve</Text>
                                </MenuOption>
                                <MenuOption value={"Andet"}>
                                    <Text style={styles.menuContent}>Andet</Text>
                                </MenuOption>
                            </MenuOptions>

                        </Menu>
                    </MenuProvider>


                </View>
                <View style={styles.container2}>
                    <Text></Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
    },
    menuContent: {
        color: "#000",
        padding: 2,
        fontSize: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
       // borderWidth: 5,
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10,
        //borderWidth: 5,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingTop: 50,
       // borderWidth: 5,
    },
    text: {
        fontSize: 25,
    }
});
