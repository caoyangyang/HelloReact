import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import  {connectComponent} from "../../redux/common/mapStateToProps"
import Swipeout from 'react-native-swipeout';

class MessageItem extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        this.props.dispatch({ type: 'detail',payload:{id: this.props.id} })
    };

    render() {
        var {dispatch, id, title, detail}=this.props;
        var delButton = [{
            text: 'Delete',
            onPress: () => {
                dispatch({type: 'DELETE', loadData: id.toString()});
            }
        }];
        return (
            <Swipeout right={delButton} autoClose={true}>
                <View style={styles.wrapper}>
                    <Image style={styles.icon}
                           source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}></Image>
                    <View style={styles.content}>
                        <Text numberOfLines={1} style={styles.groupName} onPress={this.onPress}>{title}</Text>
                        <Text numberOfLines={1} style={styles.latestNews} ellipsizeMode="tail">{detail}</Text>
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

export default connectComponent(MessageItem);