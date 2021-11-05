import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.background}>
            <Text>Profile Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default ProfileScreen;