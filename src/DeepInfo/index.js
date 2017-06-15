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
         const { navigate } = this.props.navigation;
        return (
            <View style={styles.main}>
                <Text onPress={()=>{navigate('Home')}}>More Detail </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: { flex: 1 }
});
export default DeepInfo;