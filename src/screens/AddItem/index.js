import React, {Component} from 'react';
import {TouchableWithoutFeedback, Keyboard,View, TextInput, StyleSheet} from 'react-native';
import {StackNavigator,NavigationActions} from 'react-navigation';
import  {connectComponent} from "../../redux/common/mapStateToProps"
import ButtonComponent from 'react-native-button-component';


class AddItem extends Component {
    static navigationOptions = {
        title: 'Add Item'
    };

    constructor(props) {
        super(props);
        this.state = {title: "", detail: "", more: ""};
    }
    
    onSubmit = () => {
        this.props.dispatch({type: 'ADD', loadData: {item: this.state}});
        this.props.dispatch({ type: 'home' })
    };

    render() {
        const {title, detail, more} = this.state;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.main}>
                    <TextInput multiline={true}
                               placeholder="Title" style={[styles.input, styles.title]} value={this.state.title}
                               onChangeText={(title) => this.setState({ title })}/>
                    <TextInput multiline={true}
                               placeholder="Detail" style={[styles.input, styles.detail]} value={this.state.detail}
                               onChangeText={(detail) => this.setState({ detail })}/>
                    <TextInput multiline={true}
                               placeholder="More" style={[styles.input, styles.more]} value={this.state.more}
                               onChangeText={(more) => this.setState({ more })}/>
                    <ButtonComponent shape='not-default' text="Add" backgroundColors={['#f1396d','#f1396d']}
                                     style={styles.addButton} onPress={this.onSubmit}/>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    main: {flex: 1, padding: 20},
    input: {
        borderRadius: 4,
        marginTop: 10,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: "left",
        top: 0,
        padding: 5,
        fontSize: 16
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
        flex: 1,
        borderRadius:6,
        marginRight:4,
        marginLeft:4
    }
});
export default connectComponent(AddItem);