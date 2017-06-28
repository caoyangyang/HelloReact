import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


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
                <Icon  style={styles.add} name="plus" size={30} color="white" onPress={this.handlePress}/>
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
        flex: 1
    }
});