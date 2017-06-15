import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import MessageBox from '../MessageBox';
import SearchBar from '../SearchBar';
const data= [{ title: "React Native", glance: "Build native iOS, Android and Windows apps with JavaScript." },
        { id: 1, title: "Angular", glance: "AngularJS is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC, ..." },
        { id: 2, title: "Babel", glance: "The compiler for writing next generation JavaScript." },
        { id: 3, title: "Elixir", glance: "Elixir is a dynamic, functional language designed for building scalable and maintainable applications. Elixir leverages the Erlang VM, known for running low-latency, distributed and fault-tolerant systems" },
        { id: 4, title: "Erlang", glance: "Erlang is a general-purpose, concurrent, functional programming language, as well as a garbage-collected runtime system. The term Erlang is used ..." },
        { id: 5, title: "Java", glance: "Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few " },
        { id: 6, title: "Ruby", glance: "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write." },
        { id: 7, title: "Clojure", glance: "Clojure is a dynamic, general-purpose programming language, combining the approachability and interactive development of a scripting language with an ..." },
        { id: 8, title: "Python", glance: "Python is a widely used high-level programming language for general-purpose programming, created by Guido van Rossum and first released in 1991." },
        { id: 9, title: "Javascript", glance: "JavaScript often abbreviated as JS, is a high-level, dynamic, untyped, interpreted run-time language. It has been standardized in the ECMAScript language ..." }
        ];

export default class AppContent extends Component {
      constructor(props) {
        super(props);
        this.state = { searchData: data };
    }
    search=(keyword)=>{
        var result=data.filter(a=>(a.title.indexOf(keyword)>=0))
        this.setState({searchData:result});
    };

   

    render() {
        return (
            <View style={styles.wrapper} >
                <SearchBar search={this.search}></SearchBar>
                <MessageBox data={this.state.searchData}></MessageBox>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 10,
        backgroundColor: 'white'
    }
});