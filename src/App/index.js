import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import AppTitle from '../components/AppTitle';
import AppContent from '../components/AppContent';
import AppFooter from '../components/AppFooter';

class App extends Component {
    render() {
        return (
            <View style={styles.main}>
             <AppTitle/>
             <AppContent/>
             <AppFooter/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
   main:{ flex: 1 }
});
export default App;