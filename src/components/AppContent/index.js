import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import MessageBox from '../MessageBox';
import SearchBar from '../SearchBar';

export default class AppContent extends Component {
    render() {
        return (
            <View style={styles.wrapper} >
                <SearchBar></SearchBar>
                <MessageBox></MessageBox>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 10,
        backgroundColor: 'white'
    }
});