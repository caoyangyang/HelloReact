import React from 'react';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from '../containers/App';
import Articles from '../containers/Articles';
import Detail from '../containers/DeepInfo';
import Add from '../containers/AddItem';
import ContactUs from '../containers/ContactUs';

export const AppNavigator = StackNavigator({
    Home: {screen: Main},
    Detail: {screen: Detail},
    AddItem: {screen: Add},
    ContactUs: {screen: ContactUs},
    Articles: {screen: Articles}
});
const AppWithNavigationState = ({dispatch, nav}) => {
    return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
};
const mapStateToProps = state => ({
    nav: state.nav
});

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};


export default connect(mapStateToProps)(AppWithNavigationState);
