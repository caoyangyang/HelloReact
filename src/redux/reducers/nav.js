import {AppNavigator} from '../../navigator/AppNavigator';
import {StackNavigator, NavigationActions,addNavigationHelpers} from 'react-navigation';

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'articles':
            var dispatchNav = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Articles'})
                ]
            });
            nextState = AppNavigator.router.getStateForAction(dispatchNav, state);
            break;
        case 'home':
            var dispatchNav = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home'})
                ]
            });
            nextState = AppNavigator.router.getStateForAction(dispatchNav, state);
            break;
        
        case 'add':
            NavigationActions.navigate({ routeName: 'AddItem' });
            break;
        
        case 'detail':
            NavigationActions.navigate({ routeName: 'Detail',params: action.payload});
            break;
        
        case 'contact':
            NavigationActions.navigate({ routeName: 'ContactUs' });
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

export default nav;