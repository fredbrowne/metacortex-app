import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
const TaskItem = props => {
    const size = 19;
    return (
        <View style={styles.container}>
            <View style={styles.listItem} >
                <Text style={{color: "white", fontWeight: "bold"}}>{props.title}</Text>
            </View>
            <Icon
                onPress={props.onDelete.bind(this, props.id)}
                reverse
                name='x'
                type='foundation'
                color='red'
                size={size} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        marginLeft: 20,
        backgroundColor: "#98c8cc",
        borderColor: "black",
        borderWidth: 1,
        width: "75%",
        borderRadius: 10,
    }
});

export default TaskItem;