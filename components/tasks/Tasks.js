import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TrackTask from './TrackTask';

const Tasks = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.taskHeader}>
                <Text style={styles.taskHeaderText}>Minha Agenda</Text>
            </View>
            <Image
                source={require('./images/tasktrack.jpg')} />
            <TrackTask navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fbfbfb",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    taskHeader: {
        width: "100%",
        padding: 30,
    },
    taskHeaderText: {
        fontSize: 30,
        fontFamily: "Arial",
        fontWeight: "bold",
    },
});

export default Tasks;