import React, { Component } from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppIntro from 'react-native-app-intro';
import {StackNavigator,} from 'react-navigation';
import  {connectComponent} from "../../redux/common/mapStateToProps"


class Intro extends Component {
    static navigationOptions = {
        title: 'Intro',
    };

    constructor(props) {
        super(props);
        const {navigate} = this.props.navigation;
    }

    render() {
        const {dispatch}=this.props;
        return (
            <AppIntro>
                <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
                    <View level={10}><Text style={styles.text}>Page 1</Text></View>
                </View>
                <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
                    <View level={5}><Text style={styles.text}>Page 2</Text></View>
                    <Icon style={styles.icon} name="cog" size={30} color="white" onPress={()=>dispatch({ type: 'home' })}/>
                </View>
            </AppIntro>
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 15,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
export default connectComponent(Intro);