import React from 'react';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Main from '../containers/App';
import Detail from '../containers/DeepInfo';
import Add from '../containers/AddItem';

export const AppNavigator = StackNavigator({
    Home: {screen: Main},
    Detail: {screen: Detail},
    AddItem: {screen: Add}
});
const AppWithNavigationState = ({dispatch, nav}) => {
    return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
};
AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    nav: state.nav
});


export default connect(mapStateToProps)(AppWithNavigationState);
