import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class AppFooter extends Component {
    constructor(props) {
        super(props);
    }

    add = () => {
        global.toAddItem();
    };
    
    contact = ()=>{
        global.toContact();
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Icon  style={styles.add} name="plus" size={30} color="white" onPress={this.add}/>
                <Icon  style={styles.add} name="handshake-o" size={30} color="white" onPress={this.contact}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#484848',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    add: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 20,
        flex: 1
    }
});