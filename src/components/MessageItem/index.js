import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Swipeout from 'react-native-swipeout';


export default class MessageItem extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        global.toDetail({ id: this.props.id })
    };
    render() {
        var delButton = [
            {
                text: 'Delete',
                onPress: () => {
                    fetch('https://reactnow.getsandbox.com/item', {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: this.state.id.toString()
                        })
                    })
                }
            }
        ]
        return (
            <Swipeout right={delButton} onOpen={() => {
                this.setState({
                    id: this.props.id
                })
            }}>
                <View style={styles.wrapper} >
                    <Image style={styles.icon} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}></Image>
                    <View style={styles.content} >
                        <Text numberOfLines={1} style={styles.groupName} onPress={this.onPress}>
                            {this.props.title}
                        </Text>
                        <Text numberOfLines={1} style={styles.latestNews} ellipsizeMode="tail">
                            {this.props.glance}
                        </Text>
                    </View>
                </View>
            </Swipeout>
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
        marginRight: 10,
        flexDirection: 'column'
    },
    content: {
        flex: 10,
        flexDirection: 'column'
    },
    groupName: {
        fontSize: 16
    },
    latestNews: {
        color: "grey",
        fontSize: 12
    }
});