import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ContactUs from '../../screens/ContactUs';
import  {connectComponent} from "../../redux/common/mapStateToProps"

import {
    StackNavigator,
} from 'react-navigation';

class Setting extends Component {
    static navigationOptions = {
        title: 'Setting',
    };

    constructor(props) {
        super(props);
    }

    render() {
        var {dispatch}=this.props;
        return (
            <View style={styles.main}>
                <View  style={styles.option}>
                    <Text style={styles.optionText} onPress={()=>{dispatch({ type: 'contact' })}}>Contact US</Text>
                </View>
                <View  style={styles.option}>
                    <Text style={styles.optionText} onPress={()=>{dispatch({ type: 'memo' })}}>Memo</Text>
                </View>
                <View  style={styles.option}>
                    <Text style={styles.optionText} onPress={()=>{dispatch({ type: 'intro' })}}>Intro</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10
    },
    option: {
        marginTop: 10,
        marginLeft:20
    },
    optionText: {
        fontSize: 18,
        color:'#f1396d'
    }
});

export default connectComponent(Setting);