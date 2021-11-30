import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Pressable } from 'react-native';

import TaskItem from './TaskItem';
import TaskInput from './TaskInput';

import AsyncStorage from '@react-native-async-storage/async-storage';

const TrackList = props => {
    const [taskList, setTaskList] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false)

    /* Função que inclui no Storage e na lista */
    const addTaskHandler = taskTitle => {
        const newTaskList = [...taskList, { id: Math.random().toString(), value: taskTitle}]

        AsyncStorage.setItem(props.route.params.storageType, JSON.stringify(newTaskList)).then(() => {
            setTaskList(newTaskList);
            setIsAddMode(false);
        }).catch(error => console.log(error));
    };
    /* Função que remove do Storage e da lista */
    const removeTaskHandler = (taskId) => {
        Alert.alert(
            "Apagar Tarefa?",
            "Esta ação não pode ser desfeita!",
            [
                {
                text: "Não",
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    const removedTaskList = (currentTasks, taskId) => {
                        return currentTasks.filter((task) => task.id !== taskId);
                    }
                    AsyncStorage.setItem(props.route.params.storageType, JSON.stringify(removedTaskList(taskList, taskId))).then(() => {
                        setTaskList(removedTaskList(taskList, taskId))
                        setIsAddMode(false);
                    }).catch(error => console.log(error));
                }}
            ]
        );
      }
    /* Função que desabilita Modal de inclusão de task */ 
    const cancelTaskAdditionHandler = () => {
        setIsAddMode(false);
    };
    /* Função para carregar dados do storage para a tela */
    const loadData = () => {
        AsyncStorage.getItem(props.route.params.storageType).then(data => {
            if (data !== null) {
                setTaskList(JSON.parse(data));
            }
        }).catch((error) => console.log("error"));
    }
    /* Funcão para limpar os dados do Storage e da tela */
    const handleClearTaskList = () => {
        if (taskList.length === 0) {
            Alert.alert("Não há registros para apagar.")
        } else {
            Alert.alert(
                "Apagar Tudo?",
                "Esta ação não pode ser desfeita!",
                [
                    {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                    },
                    { text: "OK", onPress: () => {
                        AsyncStorage.removeItem(props.route.params.storageType).then(() => {
                            setTaskList([]);
                        }).catch((error) => console.log(error));
                    }}
                ]
            );
        }
    }
    useEffect(() => {
        // Recupera os dados baseado no storage enviado por props
        loadData()
    });

    return(
        <View style={styles.container}>
            <View style={styles.taskControlButtons}>
                <Pressable style={styles.buttonOk} onPress={() => setIsAddMode(true)} >
                    <Text style={styles.text}>Incluir Tarefa</Text>
                </Pressable>
                <Pressable style={styles.buttonCancel} onPress={handleClearTaskList}  >
                    <Text style={styles.text}>Apagar Tudo</Text>
                </Pressable>
            </View>
            
            <TaskInput visible={isAddMode} onAddTask={addTaskHandler} onCancel={cancelTaskAdditionHandler} />
            <View style={styles.taskListItems}>
            <FlatList 
                keyExtractor={(item, index) => item.id}
                data={taskList} 
                renderItem={itemData => (
                <TaskItem id={itemData.item.id} 
                    title={itemData.item.value}
                    onDelete={removeTaskHandler}
                />
                )}
            />
            </View>
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
    taskListItems: {
        flex: 6
    },
    taskControlButtons: {
        flexDirection: "row",
        width: "100%",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonOk: {
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 7,
        elevation: 3,
        backgroundColor: "#56aa9d",
      },
    buttonCancel: {
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 7,
        elevation: 3,
        backgroundColor: "red",
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

export default TrackList;