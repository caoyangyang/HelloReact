import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

class Setting extends Component {
    static navigationOptions = {
        title: 'Setting',
    };

    constructor(props) {
        super(props);
        const {navigate} = this.props.navigation;
    }

    render() {
        return (
            <View style={styles.main}>
                <Text tabLabel="IOS">Setting</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    }
});
export default Setting;