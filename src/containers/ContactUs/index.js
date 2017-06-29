import React, {Component} from 'react';
import {Text,View, StyleSheet} from 'react-native';
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
                <Text numberOfLines={2} style={styles.address}>ThoughtWorks Software Technologies (Xi'an) Ltd. Wuhan Branch</Text>
                <Text numberOfLines={2} style={styles.address}>20th Floor, Poly International Center</Text>
                <Text numberOfLines={2} style={styles.address}>No332 Guanshan Ave. Hongshan District Wuhan, China 430070</Text>
                <Text numberOfLines={2} style={styles.contact}>Email: info-cn@thoughtworks.com</Text>
                <Text numberOfLines={2} style={styles.contact}>Tel:  027-87050527</Text>
                <MapView style={styles.map} initialRegion={position}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {flex: 1, padding: 20},
    address:{
        fontSize: 16,
        marginBottom:10,
        marginTop:10,
        color:'#333'
    },
    contact:{
        fontSize: 16,
        marginBottom:10,
        color:'#f1396d'
    },
    map:{
        width:320,
        height:320
    }

});
export default ContactUs;