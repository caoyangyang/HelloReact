import {combineReducers} from 'redux';
import items from './items';
import nav from './nav';

const AppReducer = combineReducers({
    nav, items
});

export default AppReducer;
