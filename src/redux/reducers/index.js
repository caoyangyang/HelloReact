import {combineReducers} from 'redux';
import {AppNavigator} from '../../navigator/AppNavigator';

const initialItemsState={data:[]};

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

function items(state = initialItemsState, action) {
    switch (action.type) {
        case 'SET':
            return {data: action.loadData };
        default:
            return state;
    }
}

const AppReducer = combineReducers({
    nav,items
});

export default AppReducer;
