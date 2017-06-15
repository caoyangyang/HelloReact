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
                <Text style={styles.content}>Hello React</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: { 
        flex: 1, 
        backgroundColor: 'powderblue' 
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});