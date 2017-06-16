import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppContent from '../../components/AppContent';
import AppFooter from '../../components/AppFooter';

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
        this.toDetail = (value) => { navigate('Detail', value) };
        this.toAdd = () => {navigate('AddItem') };
       
        global.toDetail = this.toDetail.bind(this);
        global.toAddItem = this.toAdd.bind(this);
        
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