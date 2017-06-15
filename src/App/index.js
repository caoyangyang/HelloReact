import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppContent from '../components/AppContent';
import AppFooter from '../components/AppFooter';

import {
    StackNavigator,
} from 'react-navigation';

class App extends Component {
    static navigationOptions = {
        title: 'ReactNow',
    };
    constructor(props) {
        super(props);
        const { navigate } = this.props.navigation;
        this.onPress = () => { navigate('Detail') };
        global.toDetail=this.onPress.bind(this);
    }
    
    render() {
        return (
            <View style={styles.main}>
                <AppContent />
                <AppFooter />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: { flex: 1 }
});
export default App;