import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class AppFooter extends Component {
    constructor(props) {
        super(props);
    }

    handlePress = () => {
        global.toAddItem();
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.add} onPress={this.handlePress}>Add</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#484848'
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    add: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 20,
        flex: 1,
        color: "white"
    }
});