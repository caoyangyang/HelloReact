import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';


import {
    StackNavigator,
} from 'react-navigation';

class AddItem extends Component {
    static navigationOptions = {
        title: 'Add Item'
    };
    constructor(props) {
        super(props);
        this.state = { title: "", detail: "", more: "" };
    }
    onSubmit = () => {
        fetch('https://reactnow.getsandbox.com/item', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                item: this.state
            })
        })
        this.props.navigation.navigate('Home');
    };

    render() {
        const { title, detail, more } = this.state;
        return (
            <View style={styles.main}>
                <TextInput multiline={true}
                    placeholder="Title" style={[styles.input, styles.title]} value={this.state.title} onChangeText={(title) => this.setState({ title })} />
                <TextInput multiline={true}
                    placeholder="Glance" style={[styles.input, styles.detail]} value={this.state.detail} onChangeText={(detail) => this.setState({ detail })} />
                <TextInput multiline={true}
                    placeholder="More" style={[styles.input, styles.more]} value={this.state.more} onChangeText={(more) => this.setState({ more })} />
                <Button color="gray"
                    overrides={{ backgroundColor: "black" }}
                    title="Add"
                    style={styles.addButton}
                    onPress={this.onSubmit}>
                </Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: { flex: 1, padding: 20 },
    input: {
        borderRadius: 4,
        marginTop: 10,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: "left",
        top: 0,
        padding:5,
        fontSize:16
    },
    title: {
        flex: 1
    },
    detail: {
        flex: 3
    },
    more: {
        flex: 6,
        marginBottom: 100
    },
    addButton: {
        flex: 1
    }
});
export default AddItem;