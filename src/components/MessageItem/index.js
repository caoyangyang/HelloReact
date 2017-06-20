import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';


class MessageItem extends Component {
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
                    this.props.dispatch({ type: 'DELETE',loadData:this.state.id.toString()});
                }
            }
        ]
        return (
            <Swipeout right={delButton} autoClose={true} onOpen={() => {
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
                            {this.props.detail}
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

const mapStateToProps = state => ({
    items: state.items
});
MessageItem.propTypes = {
    items: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MessageItem);