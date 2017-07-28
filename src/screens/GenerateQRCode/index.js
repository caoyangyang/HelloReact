import React, {Component} from 'react';
import {Text,View, StyleSheet} from 'react-native';
import {StackNavigator,NavigationActions} from 'react-navigation';
import QuickResponseCode from '../../components/QuickResponseCode';

class GenerateQRCode extends Component {
    static navigationOptions = {
        title: 'QR Code'
    };

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.main}>
                <QuickResponseCode></QuickResponseCode>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {flex: 1, padding: 20},

});
export default GenerateQRCode;