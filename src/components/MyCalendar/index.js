import React, {Component} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {View, Text, StyleSheet} from 'react-native';

class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.onDayPress = this.dayPress.bind(this);

    }

    dayPress(day) {
        data = new Date(day.dateString);
        this.setState(Object.assign({}, {data}))
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>{this.props.title}</Text>
                <Calendar style={styles.calendar} current={this.state.date} onDayPress={this.onDayPress}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main: {
        height: 380
    },
    calendar: {
        borderWidth: 0,
        paddingTop: 5,
        borderColor: 'gray',
    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee'
    },
    container: {
        flex: 1,
        backgroundColor: 'gray'
    }
});
export default MyCalendar;