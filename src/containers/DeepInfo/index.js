import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import {StackNavigator,NavigationActions} from 'react-navigation';
import  {connectComponent} from "../../redux/common/mapStateToProps"
import ButtonComponent from 'react-native-button-component';

class DeepInfo extends Component {
    static navigationOptions = {
        title: 'Detail'
    };
    constructor(props) {
        super(props);
        this.state = { data: {} ,isEdit:false};
    }
    componentDidMount() {
        var self = this;
        var id = self.props.navigation.state.params?self.props.navigation.state.params.id:'1';
        fetch("https://reactnow.getsandbox.com/item/" + id)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                this.setState({
                    data: responseJson
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    
    startEdit=()=>{
        this.setState({isEdit:true});
    };
    cancel=()=>{
        this.setState({isEdit:false});
    };

    save=()=>{
        this.props.dispatch({type:"UPDATE",loadData:{
            item: this.state.data
        }});
        this.props.navigation.dispatch(NavigationActions.reset(
            {
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home'})
                ]
            }));
    };

    updateState=(data)=>{
        var newData = Object.assign(this.state.data,data);
        this.setState({ data: newData });
    };

    render() {
        const { navigate, state } = this.props.navigation;
        const { data } = this.state;
        viewComponent =<View style={styles.main} onPress={() => { navigate('Home') }}>
            <Text style={styles.title}>{data.title} </Text>
            <Text style={styles.detail}>{data.detail} </Text>
            <Text style={styles.more}>{data.more} </Text>
            <ButtonComponent  shape='not-default' backgroundColors={['#f1396d','#f1396d']} text="Edit" style={styles.button} onPress={this.startEdit}/>
        </View>;

        editComponent =<View style={styles.main} onPress={() => { navigate('Home') }}>
            <TextInput multiline={true}
                       placeholder="Title" style={[styles.input, styles.title]} value={data.title} onChangeText={(title) => this.updateState({ title })} />
            <TextInput multiline={true}
                       placeholder="Detail" style={[styles.input, styles.detail]} value={data.detail} onChangeText={(detail) => this.updateState({ detail })} />
            <TextInput multiline={true}
                       placeholder="More" style={[styles.input, styles.more]} value={data.more} onChangeText={(more) => this.updateState({ more })} />
            <ButtonComponent   shape='not-default' text="Save" backgroundColors={['#f1396d','#f1396d']} style={styles.button} onPress={this.save}/>
            <ButtonComponent   shape='not-default' text="Cancel" backgroundColors={['grey','grey']} style={styles.button} onPress={this.cancel}/>
        </View>;

        return (this.state.isEdit?editComponent:viewComponent);
    }
}
const styles = StyleSheet.create({
    main: { flex: 1 },
    title: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: "bold"
    },
    detail: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 16,
        color: "white",
        backgroundColor: "black"
    },
    more: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        color: "grey",
        fontSize: 16
    },
    button:{
        height:30,
        marginTop:10,
        borderRadius:6,
        marginRight:4,
        marginLeft:4
    }
});
export default connectComponent(DeepInfo);
