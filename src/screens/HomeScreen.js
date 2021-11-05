import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
    return (
        <View style={styles.background}>
            <SearchBar />
            <Text>Home Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default HomeScreen;