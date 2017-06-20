import {combineReducers} from 'redux';
import {AppNavigator} from '../../navigator/AppNavigator';
import _ from 'lodash';

const initialItemsState = {data: []};
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
            return {data: action.loadData};
        case 'DELETE':
            var {data}=state, id = action.loadData;
            fetch('https://reactnow.getsandbox.com/item', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id
                })
            });
            _.remove(data, function (item) {
                return item.id === id;
            });
            global.dataFromServer = data;
            return {data};
        case 'INIT':
            var data=action.loadData;
            global.dataFromServer = data;
            return {data};
        case 'SEARCH':
            keyword = action.loadData;
            var data = global.dataFromServer.filter(a => (a.title.toLowerCase().indexOf(keyword) >= 0 || a.detail.toLowerCase().indexOf(keyword) >= 0));
            return {data};
        default:
            return state;
    }
}

const AppReducer = combineReducers({
    nav, items
});

export default AppReducer;
