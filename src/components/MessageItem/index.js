import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class MessageItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.wrapper} >
                <Image style={styles.icon} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}></Image>
                <View style={styles.content}>
                    <Text numberOfLines={1} style={styles.groupName}>
                        {this.props.title}
                    </Text>
                    <Text numberOfLines={1} style={styles.latestNews} ellipsizeMode="tail">
                        {this.props.glance}
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    icon: {
        flex: 1.4,
        width: 40,
        height: 40,
        marginRight:10,
        flexDirection: 'column'
    },
    content: {
        flex: 10,
        flexDirection: 'column'
    },
    groupName: {
        fontSize:16
    },
    latestNews: {
        color:"grey",
        fontSize:12
    }
});