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
        const {navigate} = this.props.navigation;
        this.toDetail = (value) => {
            this.props.dispatch({ type: 'detail',payload:value })
        };
        this.toAdd = () => {
            this.props.dispatch({ type: 'add' })
        };
        this.toContact = () => {
            this.props.dispatch({ type: 'contact' })
        };
        this.toArticle = () => {
            this.props.dispatch({ type: 'articles' })
        };
        this.toHome = () => {
            this.props.dispatch({ type: 'home' })
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
export default connectComponent(Home);