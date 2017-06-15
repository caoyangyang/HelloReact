import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class AppFooter extends Component {
    render() {
        return (
            <View style={styles.wrapper} >
              
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper:{ 
        flex: 1, 
        backgroundColor: 'steelblue' 
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});