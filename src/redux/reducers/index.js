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
    var {data}=state, loadData = action.loadData;
    switch (action.type) {
        case 'SET':
            return {data: action.loadData};
        case 'DELETE':
            var id = loadData;
            deleteItem(id);
            _.remove(data, function (item) {
                return item.id === id;
            });
            reflashBackUp(data);
            return {data};
        case 'INIT':
            reflashBackUp(action.loadData);
            return {data: action.loadData};
        case 'SEARCH':
            var keyword = loadData;
            var result = global.dataFromServer.filter(a => (a.title.toLowerCase().indexOf(keyword) >= 0 || a.detail.toLowerCase().indexOf(keyword) >= 0));
            return {data: result};
        case 'ADD':
            var newItem = loadData;
            createItem(newItem);
            data.push(newItem);
            reflashBackUp(data);
            return {data};
        case 'UPDATE':
            var existedItem = loadData;
            index = _.findIndex(data, {id: existedItem.id});
            data[index] = existedItem;
            updateItem(existedItem);
            reflashBackUp(data);
            return {data};
        default:
            return state;
    }
}
updateItem = (data)=> {
    fetch('https://reactnow.getsandbox.com/item', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
};
createItem = (data)=> {
    fetch('https://reactnow.getsandbox.com/item', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
};

deleteItem = (id)=> {
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
};

reflashBackUp = (data)=> {
    global.dataFromServer = data;
};

const AppReducer = combineReducers({
    nav, items
});

export default AppReducer;
