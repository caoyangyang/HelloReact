import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppContent from '../../components/AppContent';
import AppFooter from '../../components/AppFooter';

import {
    StackNavigator,NavigationActions
} from 'react-navigation';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
        const {navigate} = this.props.navigation;
        this.toDetail = (value) => {
            navigate('Detail', value)
        };
        this.toAdd = () => {
            navigate('AddItem')
        };
        this.toContact = () => {
            navigate('ContactUs')
        };
        this.toArticle = () => {
            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    navigate('Articles')
                ]
            }))
        };
        this.toHome = () => {
            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    navigate('Home')
                ]
            }))
        };
        global.toDetail = this.toDetail.bind(this);
        global.toAddItem = this.toAdd.bind(this);
        global.toContact = this.toContact.bind(this);
        global.toArticle = this.toArticle.bind(this);
        global.toHome = this.toHome.bind(this);
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
export default Home;