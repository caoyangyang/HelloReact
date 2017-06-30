import React, {Component} from 'react';
import {Text,View, StyleSheet} from 'react-native';
import {StackNavigator,NavigationActions} from 'react-navigation';
import MyCalendar from '../../components/MyCalendar';


class Memo extends Component {
    static navigationOptions = {
        title: 'Memo'
    };

    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <View style={styles.main}>
                <MyCalendar title="Date"></MyCalendar>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {flex: 1, padding: 20},

});
export default Memo;