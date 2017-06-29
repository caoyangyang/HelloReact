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

    contact = ()=> {
        global.toContact();
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.iconWrapper}>
                    <Icon style={styles.icon} name="plus" size={30} color="white" onPress={this.add}/>
                </View>
                <View style={styles.iconWrapper}>
                    <Icon style={styles.icon} name="handshake-o" size={30} color="white" onPress={this.contact}/>
                </View>
                <View style={styles.iconWrapper}>
                    <Icon style={styles.icon} name="user-o" size={30} color="white"/>
                </View>
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
    iconWrapper: {
        paddingTop: 14,
        paddingLeft: 10,
        marginLeft: 40,
        marginRight: 40,
        flex: 1
    },
    icon: {
        fontSize: 20
    }
});