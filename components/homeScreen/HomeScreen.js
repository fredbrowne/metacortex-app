import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Articles from './Articles';
import SearchBar from './SearchBar';
import FastApps from './FastApps';

const HomeScreen = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>NurseBag</Text>
                <Icon
                    name="bell"
                    type="font-awesome-5"
                    color="white" />
            </View>
            <SearchBar navigation={props.navigation}/>
            <FastApps />
            <Articles />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fbfbfb",
        flex: 1,
        justifyContent: "center",
    },
    header: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#56aa9d"
    },
    headerText: {
        color: "white",
        fontSize: 30,
        fontWeight: "400",
    },
});

export default HomeScreen;