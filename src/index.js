import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import AppReducer from './redux/reducers';
import AppWithNavigationState from './navigator/AppNavigator';

class HelloReactApp extends React.Component {
    store = createStore(AppReducer);

    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default function index() {
    AppRegistry.registerComponent('HelloReact', () => HelloReactApp);
}