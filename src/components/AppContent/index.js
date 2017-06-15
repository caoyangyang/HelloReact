import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import HelloReact from '../HelloReact';

export default class AppContent extends Component {
    render() {
        return (
             <View style={styles.wrapper} >
                    <HelloReact></HelloReact>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: { 
        flex: 10, 
        backgroundColor: 'skyblue' 
    }
});