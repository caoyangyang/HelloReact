import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MessageBox from '../MessageBox';
import SearchBar from '../SearchBar';
import _ from 'lodash';

class AppContent extends Component {
    constructor(props) {
        super(props);
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
                this.props.dispatch({ type: 'SET',loadData:responseJson.data});
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    remove=(id)=>{
        var self=this;
        var {searchData}=self.state;

        _.remove(searchData,function(item){
            return item.id===id;
        });
        this.props.dispatch({ type: 'SET',loadData:searchData});
    };

    search = (keyword) => {
        keyword = keyword.toLowerCase();
        var result = this.dataFromServer.filter(a => (a.title.toLowerCase().indexOf(keyword) >= 0 || a.detail.toLowerCase().indexOf(keyword) >= 0))
        this.props.dispatch({ type: 'SET',loadData:result});
    };

    render() {
        const {items}=this.props;
        return (
            <View style={styles.wrapper} >
                <SearchBar search={this.search}></SearchBar>
                <MessageBox data={items.data} remove={this.remove}></MessageBox>
            </View>
        );
    }
}
AppContent.propTypes = {
    items: PropTypes.object.isRequired
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 10,
        backgroundColor: 'white'
    }
});
const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps)(AppContent);