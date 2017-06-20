import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';
import  {connectComponent} from "../../redux/common/mapStateToProps"

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        onPress = ()=> {
            this.props.dispatch({type: 'SEARCH', loadData: this.state.text.toLowerCase()});
        };

        return (
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Keyword">
                </TextInput>
                <Button color="gray"
                        overrides={{backgroundColor: "black"}}
                        title="Search"
                        style={styles.search}
                        onPress={onPress}>
                </Button>
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
        paddingLeft: 10,
        paddingRight: 10,
        color: "gray",
        backgroundColor: "white",
        flex: 8
    },
    search: {
        flex: 2
    },
    wrapper: {
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "white",
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 5
    }
});

export default connectComponent(SearchBar);