import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackNavigator,NavigationActions} from 'react-navigation';
import AppContent from '../../components/AppContent';
import AppFooter from '../../components/AppFooter';
import  {connectComponent} from "../../redux/common/mapStateToProps"


class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
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
    main: {flex: 1}
});
export default connectComponent(Home);