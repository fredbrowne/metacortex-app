import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text } from 'react-native';

const TaskInput = props => {
    const [enteredTask, setEnteredTask] = useState("");

    const taskInputHandler = (enteredText) => {
        setEnteredTask(enteredText);
    };

    const addTaskHandler = () => {
        props.onAddTask(enteredTask);
        setEnteredTask("");
    };
    const cancelTaskHandler = () => {
        props.onCancel();
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Text>Digite a tarefa a ser incluída:</Text>
                <TextInput placeholder="Descrição da Tarefa" 
                    style={styles.input}
                    onChangeText={taskInputHandler}
                    value={enteredTask}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={cancelTaskHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addTaskHandler} />
                    </View>
                </View>

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: { 
        justifyContent: "center", 
        alignItems: "center" ,
        flex: 1,
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        height: 30,
        width: 40,
        borderRadius: 10,
        margin: 5,
        padding: 10,
        width: 250,
        height: 100
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
    },
    button: {
        width: "40%" 
    }
});

export default TaskInput;