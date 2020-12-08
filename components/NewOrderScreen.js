import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import ProfileScreen from "./ProfileScreen";
import MeasurementScreen from "./orderNavigation/MeasurementScreen";
import CustomizationScreen from "./orderNavigation/CustomizationScreen";

const FurnitureStack = createStackNavigator({
    measurement: {screen: CustomizationScreen}

},
    {
        initialRouteName: 'TYPE',
        navigationOptions: {
            title: 'type'
        }
    });

export default FurnitureStack
