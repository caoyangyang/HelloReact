import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import MessageItem from '../MessageItem';

export default class MessageBox extends Component {
    render() {
        var datas = this.props.data;
        var messages = datas.map(m => (<MessageItem key={Math.random()} remove={this.props.remove} title={m.title} detail={m.detail} id={m.id}></MessageItem>));
        return (
            <ScrollView style={styles.wrapper} >
                {messages}
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 10,
        backgroundColor: 'white'
    }
});