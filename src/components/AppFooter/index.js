import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  {connectComponent} from "../../redux/common/mapStateToProps"


class AppFooter extends Component {
    constructor(props) {
        super(props);
    }

    home = ()=>{
        this.props.dispatch({ type: 'home' })
    };
    add = () => {
        this.props.dispatch({ type: 'add' })
    };

    contact = ()=> {
        this.props.dispatch({ type: 'contact' })
    };

    article = ()=> {
        this.props.dispatch({ type: 'articles' })
    };

    render() {
        var {dispatch}=this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.iconWrapper}>
                    <Icon style={styles.icon} name="cube" size={30} color="white" onPress={this.home}/>
                </View>
                <View style={styles.iconWrapper}>
                    <Icon style={styles.icon} name="plus" size={30} color="white" onPress={this.add}/>
                </View>
                <View style={styles.iconWrapper}>
                    <Icon style={styles.icon} name="handshake-o" size={30} color="white" onPress={this.contact}/>
                </View>
                <View style={styles.iconWrapper}>
                    <Icon style={styles.icon} name="book" size={30} color="white" onPress={this.article}/>
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
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    },
    icon: {
        fontSize: 20
    }
});
export default connectComponent(AppFooter);