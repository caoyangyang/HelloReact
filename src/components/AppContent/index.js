import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import  {connectComponent} from "../../redux/common/mapStateToProps"
import MessageBox from '../MessageBox';
import SearchBar from '../SearchBar';


class AppContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('https://reactwow.getsandbox.com/item')
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                this.props.dispatch({type: 'INIT', loadData: responseJson.data});
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    render() {
        const {items}=this.props;
        return (
            <View style={styles.wrapper}>
                <SearchBar></SearchBar>
                <MessageBox data={items.data}></MessageBox>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 10,
        backgroundColor: 'white'
    }
});

export default connectComponent(AppContent);