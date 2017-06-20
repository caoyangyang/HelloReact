import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MessageBox from '../MessageBox';
import SearchBar from '../SearchBar';


class AppContent extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        fetch('https://reactnow.getsandbox.com/item')
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                this.props.dispatch({ type: 'INIT',loadData:responseJson.data});
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    render() {
        const {items}=this.props;
        return (
            <View style={styles.wrapper} >
                <SearchBar></SearchBar>
                <MessageBox data={items.data}></MessageBox>
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