import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const CalendarScreen = ({navigation}) => {
    return (
        <View style={styles.background}>
            <Text>Calendar Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default CalendarScreen;