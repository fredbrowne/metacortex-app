import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const FastApps = props => {
    return(
        <View style={styles.fastApps}>
            <Text style={styles.fastAppsHeader}>O que você precisa ?</Text>
            <View style={styles.mostCommonApps}>
                <TouchableOpacity style={styles.mostCommonAppsItem}>
                    <Icon
                        reverse
                        opacity={0.3}
                        name="file-alt"
                        type="font-awesome-5"
                        color="#ffb95b" 
                    />
                    <Text>Notas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mostCommonAppsItem}>
                    <Icon
                        reverse
                        opacity={0.3}
                        name="notes-medical"
                        type="font-awesome-5"
                        color="#f38380" 
                    />
                    <Text>Prontuários</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mostCommonAppsItem}>
                    <Icon
                        reverse
                        opacity={0.3}
                        name="pills"
                        type="font-awesome-5"
                        color="#32666a" 
                    />
                    <Text>Guia</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    fastApps: {
        flex: 3,
        margin: 30,
    },
    fastAppsHeader: {
        fontSize: 20,
        fontWeight: "400"
    },
    mostCommonApps: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    mostCommonAppsItem: {
        padding: 10,
        alignItems: "center",
    },
});

export default FastApps;