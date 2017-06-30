import {AppNavigator} from '../../navigator/AppNavigator';
import {StackNavigator, NavigationActions,addNavigationHelpers} from 'react-navigation';

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));
function navigate(parames,state){
    return AppNavigator.router.getStateForAction(
        NavigationActions.navigate(parames),
        state
    );
}
function reset(parames,state){
    dispatchNav = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate(parames)
        ]
    })
    return AppNavigator.router.getStateForAction(dispatchNav, state);
}
function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'articles':
            nextState = reset({routeName:'Articles'},state);
            break;
        case 'home':
            nextState =reset({routeName:'Home'},state);
            break;
        case 'add':
            nextState = navigate({routeName:'AddItem'},state);
            break;
        case 'detail':
            nextState = navigate({ routeName: 'Detail',params: action.payload}, state)
            break;
        case 'contact':
            nextState = navigate({routeName:'ContactUs'},state);
            break;
        case 'setting':
            nextState = navigate({routeName:'Setting'},state);
            break;
        case 'memo':
            nextState = navigate({routeName:'Memo'},state);
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

export default nav;