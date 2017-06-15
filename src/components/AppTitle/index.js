import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class AppTitle extends Component {
    render() {
        return (
            <View style={styles.wrapper} >
                <Text style={styles.content}>ReactNow</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: { 
        flex: 1, 
        backgroundColor: '#484848',
        marginTop:20
    },
    content: {
        fontSize: 22,
        textAlign: 'center',
        margin: 10,
        color:'white'
    }
});