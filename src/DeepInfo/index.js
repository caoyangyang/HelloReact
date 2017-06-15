import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import {
    StackNavigator,
} from 'react-navigation';

class DeepInfo extends Component {
    static navigationOptions = {
        title: 'Detail'
    };
    render() {
        const { navigate, state } = this.props.navigation;
        return (
            <View style={styles.main} onPress={() => { navigate('Home') }}>
                <Text style={styles.title}>{state.params.title} </Text>
                <Text style={styles.detail}>{state.params.detail} </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: { flex: 1 },
    title:{
        fontSize: 18,
        margin:20
    },
    detail:{
        marginLeft:20,
        marginRight:20,
        fontSize: 16,
        color: "grey",
    }
});
export default DeepInfo;