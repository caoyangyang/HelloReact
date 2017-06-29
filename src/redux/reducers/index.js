import {combineReducers} from 'redux';
import {AppNavigator} from '../../navigator/AppNavigator';
import items from './items';

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

const AppReducer = combineReducers({
    nav, items
});

export default AppReducer;
