import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const MedicalScreen = ({navigation}) => {
    return (
        <View style={styles.background}>
            <Text>Medical Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default MedicalScreen;