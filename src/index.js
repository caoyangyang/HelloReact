import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Main from './containers/App';
import Detail from './containers/DeepInfo';


export default function index() {
    const ReactApp = StackNavigator({
        Home: { screen: Main },
        Detail: { screen: Detail }
    });
    AppRegistry.registerComponent('HelloReact', () => ReactApp);
}