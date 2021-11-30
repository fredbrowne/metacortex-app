import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Modal, Text, Pressable } from 'react-native';
import { Divider } from 'react-native-elements';

const DiseaseDetail = props => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <ScrollView>
            <View style={styles.diseaseResultsItem}>
                <Modal animationType="slide" visible={modalVisible} transparent={true}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTextTitle}>{props.title}</Text>
                            <ScrollView>
                                <Text style={styles.modalText}>{props.description}</Text>
                                <Text style={styles.modalTextTitle}>Sintomas</Text>
                                <Text style={styles.modalText}>{props.symptoms}</Text>
                                <Text style={styles.modalTextTitle}>Diagnóstico</Text>
                                <Text style={styles.modalText}>{props.diagnostic}</Text>
                                <Text style={styles.modalTextTitle}>Tratamento</Text>
                                <Text style={styles.modalText}>{props.treatment}</Text>
                                <Text style={styles.modalTextTitle}>Fonte</Text>
                                <Text style={styles.modalText}>{props.source}</Text>
                                <Divider orientation="horizontal" />
                                <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>VOLTAR</Text>
                                </Pressable>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Divider orientation="horizontal" />
                    <Text style={styles.description} numberOfLines={2}>{props.description}</Text>
                </Pressable>
            </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fbfbfb",
        color: "black",
        paddingVertical: 50,
        alignItems: "center",
    },
    centeredView: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        flex: 1,
        width: "100%",
        height: "100%",
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: "32%",
        borderRadius: 10,
        backgroundColor: "#f38380",
        color: "white"
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
    },
    modalText: {
        marginBottom: 15,
    },
    modalTextTitle: {
        fontSize: 30,
        fontWeight: "bold",
    },
    diseaseResultsItem: {
        marginVertical: 5,
        borderColor: "#56aa9d",
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        justifyContent: "space-between",
    },
});

export default DiseaseDetail;