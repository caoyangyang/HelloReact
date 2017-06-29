import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppContent from '../../components/AppContent';
import AppFooter from '../../components/AppFooter';

import {
    StackNavigator,
} from 'react-navigation';

class Articles extends Component {
    static navigationOptions = {
        title: 'Articles',
    };

    constructor(props) {
        super(props);
        const {navigate} = this.props.navigation;
    }

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.content}>Test</Text>
                <AppFooter />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {flex: 1},
    content: {
        flex: 10,
        backgroundColor: 'white'
    }
});
export default Articles;