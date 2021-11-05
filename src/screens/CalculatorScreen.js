import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const CalculatorScreen = ({navigation}) => {
    return (
        <View style={styles.background}>
            <Text>Calculator Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default CalculatorScreen;