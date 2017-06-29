import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {StackNavigator,NavigationActions} from 'react-navigation';
import MapView from 'react-native-maps';



class ContactUs extends Component {
    static navigationOptions = {
        title: 'Contact us'
    };

    constructor(props) {
        super(props);
        this.state = {position:{latitude: 30.4939764400,longitude: 114.4039473400,latitudeDelta: 0.0922,longitudeDelta: 0.0421}};
    }

    render() {
        const {position} = this.state;
        return (
            <View style={styles.main}>
                <MapView style={styles.map} initialRegion={position}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {flex: 1, padding: 20},
    map:{
        width:320,
        height:320
    }

});
export default ContactUs;