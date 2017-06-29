import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
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
                <ScrollableTabView tabBarActiveTextColor="#f1396d" tabBarUnderlineStyle={styles.underline} style={styles.scrollableTabView}>
                    <Text tabLabel="IOS">Android Test1</Text>
                    <Text tabLabel="Android">Android Test2</Text>
                    <Text tabLabel="ReactNative">ReactNative Test3</Text>
                </ScrollableTabView>
                <AppFooter />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    underline:{
        backgroundColor:'#f1396d'
    },
    scrollableTabView: {
        flex: 10,
        backgroundColor: 'white'
    }
});
export default Articles;