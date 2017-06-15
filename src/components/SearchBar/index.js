import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,View
} from 'react-native';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View style={styles.wrapper}> 
                <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
                placeholder="Search Now" >
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'rgb(247,247,247)',
        borderRadius: 4,
        borderWidth: 1,
        paddingLeft:10,
        paddingRight:10,
        color: "gray",
        backgroundColor: "white"
    },
    wrapper: {
        paddingLeft:5,
        paddingRight:5,
        backgroundColor: "white"
    }
});