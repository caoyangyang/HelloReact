import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import MessageBox from '../MessageBox';
import SearchBar from '../SearchBar';

export default class AppContent extends Component {
    constructor(props) {
        super(props);
        this.state = { searchData: [] };
        this.dataFromServer = [];
    }
    componentDidMount() {
        var self = this;
        fetch('https://reactnow.getsandbox.com/item')
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                self.dataFromServer = responseJson.data;
                this.setState({
                    searchData: responseJson.data,
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    search = (keyword) => {
        keyword = keyword.toLowerCase()
        var result = this.dataFromServer.filter(a => (a.title.toLowerCase().indexOf(keyword) >= 0 || a.glance.toLowerCase().indexOf(keyword) >= 0))
        this.setState({ searchData: result });
    };

    render() {
        return (
            <View style={styles.wrapper} >
                <SearchBar search={this.search}></SearchBar>
                <MessageBox data={this.state.searchData}></MessageBox>
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