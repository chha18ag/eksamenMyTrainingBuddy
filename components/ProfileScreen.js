import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import OverviewScreen from "./profileNavigation/OverviewScreen";
import DetailScreen from "./profileNavigation/DetailScreen";


const OverviewStack = createStackNavigator({
    Oversigt: {screen: OverviewScreen},
    INFORMATION: {screen: DetailScreen},

},
    {
        initialRouteName: 'Oversigt',
        navigationOptions: {
            title: 'Main'
        }
    }
    );

export default OverviewStack

