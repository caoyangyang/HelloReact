import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import {
    StackNavigator,
} from 'react-navigation';

class DeepInfo extends Component {
    static navigationOptions = {
        title: 'Detail'
    };
       constructor(props) {
        super(props);
        this.state = { data: {} };
    }
    componentDidMount() {
        var self = this;
        var id=this.props.navigation.state.params.id;
        fetch("https://reactnow.getsandbox.com/item/"+id)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                this.setState({
                    data: responseJson,
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    render() {
        const { navigate, state } = this.props.navigation;
        const {data}=this.state;
        return (
            <View style={styles.main} onPress={() => { navigate('Home') }}>
                <Text style={styles.title}>{data.title} </Text>
                <Text style={styles.detail}>{data.detail} </Text>
                <Text style={styles.detail}>{data.more} </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: { flex: 1 },
    title:{
        fontSize: 18,
        margin:20
    },
    detail:{
        marginLeft:20,
        marginRight:20,
        fontSize: 16,
        color: "grey",
    }
});
export default DeepInfo;