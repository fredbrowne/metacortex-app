import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const TrackTask = ({ navigation }) => {
    return(
        <View style={styles.task}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Pendente", {name: "Pendente", storageType: "@pending"})} >
                <View style={styles.taskDetail}>
                    <Icon
                        reverse
                        name='x'
                        type='foundation'
                        color='#c1272d' />
                    <View style={styles.taskDetailTextBlock}>
                        <Text style={styles.taskDetailHeader}>Pendente</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Em Andamento", {name: "Em Andamento", storageType: "@inprogress"})} >
                <View style={styles.taskDetail}>
                    <Icon
                        reverse
                        name='spinner'
                        type='font-awesome-5'
                        color='#ffb95b' />
                    <View style={styles.taskDetailTextBlock}>
                        <Text style={styles.taskDetailHeader}>Em Andamento</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Concluído", {name: "Concluído", storageType: "@done"})} >
            <View style={styles.taskDetail}>
                <Icon
                    reverse
                    name='check'
                    type='foundation'
                    color='#009245' />
                <View style={styles.taskDetailTextBlock}>
                    <Text style={styles.taskDetailHeader}>Concluído</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    task: {
        width: "100%",
        alignItems: "center",
    },
    taskDetail: {
        paddingVertical: 20,
        flexDirection: "row",
        minWidth: "60%",
    },
    taskDetailTextBlock: {
        margin: 20,
    },
    taskDetailHeader: {
        fontSize: 15,
        fontWeight: "bold"
    }
});


export default TrackTask;