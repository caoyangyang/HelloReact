import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView,Animated} from 'react-native';
import MessageItem from '../MessageItem';
import Animation from 'lottie-react-native';

export default class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source:require('../../animation/heart.json'),
            progress: new Animated.Value(0),
            config: {
                duration: 3000,
                imperative: false,
            },
        };
    }

    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 1000,
        }).start();
    }

    setAnim(anim) {
        this.anim = anim;
    }

    render() {
        const {source,progress}=this.state;
        var datas = this.props.data;
        var viewMode = datas.map(m => (
            <MessageItem key={Math.random()} title={m.title} detail={m.detail} id={m.id}></MessageItem>));
        var loaddingAnimation =<Animation
            ref={animation => { this.animation = animation; }}
            style={{ width: 380, height: 380}}
            source={source}
            progress={progress}
            ref={this.setAnim}/>;
        var messages = datas.length > 0 ? viewMode : loaddingAnimation;
        return (
            <ScrollView style={styles.wrapper}>{messages}</ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 10,
        backgroundColor: 'white'
    }
});