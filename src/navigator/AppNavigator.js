import React from 'react';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Home from '../screens/Home';
import Articles from '../screens/Articles';
import GenerateQRCode from '../screens/GenerateQRCode';
import Detail from '../screens/DeepInfo';
import Add from '../screens/AddItem';
import ContactUs from '../screens/ContactUs';
import Setting from '../screens/Setting';
import Memo from '../screens/Memo';
import Intro from '../screens/Intro';

export const AppNavigator = StackNavigator({
    Home: {screen: Home},
    Detail: {screen: Detail},
    AddItem: {screen: Add},
    ContactUs: {screen: ContactUs},
    Setting: {screen: Setting},
    Articles: {screen: Articles},
    Memo: {screen: Memo},
    Intro: {screen: Intro},
    GenerateQRCode:{screen: GenerateQRCode}
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
