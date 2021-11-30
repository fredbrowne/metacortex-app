import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable , TextInput, TouchableOpacity, Picker } from 'react-native';
import { Icon } from 'react-native-elements';
import { Keyboard } from 'react-native'
import { Divider } from 'react-native-elements';


const CalcDrogas = (props) => {
    const [dose, setDose] = useState(0);
    const [peso, setPeso] = useState(0);
    const [concentracao, setConcentracao] = useState(0);
    const [dosagem, setDosagem] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calcIV = (dose, peso, concentracao, dosagem) => {
        let total = 0;
        total = (dose * peso * 60) / ((concentracao/dosagem) * 1000)
        setResultado(total)
    };

    return (
        <View style={styles.container}>
            <View style={styles.calcHeader}>
                <Icon
                    reverse
                    name="calculator"
                    type="font-awesome-5"
                    color="#534741" />
                <Text style={styles.calcHeaderText}>Taxa de IV</Text>
            </View>
            <View style={styles.calcBodyHeader}>
                <Text style={styles.calcBodyHeaderText}>CALCULAR</Text>
            </View>
            <View style={styles.calcBody}>
                <View style={styles.calcBodyInput}>
                    <View style={styles.calcBodyInputItem}>
                        <Text style={styles.calcBodyInputText}>DOSE (mcg/kg/min): </Text>    
                        <TextInput
                            style={styles.calcBodyInputField}
                            textAlign={"right"}
                            placeholder="Dose"
                            onChangeText={dose => setDose(dose)}
                            maxLength={3}
                        />
                    </View>
                    <View style={styles.calcBodyInputItem}>
                        <Text style={styles.calcBodyInputText}>PESO: </Text>    
                        <TextInput
                            style={styles.calcBodyInputField}
                            textAlign={"right"}
                            placeholder="Peso"
                            onChangeText={peso => setPeso(peso)}
                            maxLength={3}
                        />
                    </View>
                    <View style={styles.calcBodyInputItem}>
                        <Text style={styles.calcBodyInputText}>CONCENTRAÇÃO: </Text>    
                        <TextInput
                            style={styles.calcBodyInputField}
                            textAlign={"right"}
                            placeholder="Concentração"
                            onChangeText={concentracao => setConcentracao(concentracao)}
                            maxLength={3}
                        />
                    </View>
                    <View style={styles.calcBodyInputItem}>
                        <Text style={styles.calcBodyInputText}>DOSAGEM (cc): </Text>    
                        <TextInput
                            style={styles.calcBodyInputField}
                            textAlign={"right"}
                            placeholder="Dosagem (cc)"
                            onChangeText={dosagem => setDosagem(dosagem)}
                            maxLength={3}
                        />
                    </View>
                </View>
                <View style={styles.calcBottom}>
                    <Pressable style={styles.calcButton} title="Calcular" onPress={() => calcIV(dose, peso, concentracao, dosagem)}>
                        <Text style={styles.buttonText}>CALCULAR</Text>
                    </Pressable>
                </View>
                <View style={styles.calcResultsHeader}>
                    <Text style={styles.calcResultsHeaderText}>RESULTADOS</Text>
                </View>
                <View style={styles.calcBodyResults}>
                    <View style={styles.calcBodyResultsCard}>
                        <View style={styles.calcBodyResultsItem}>
                            <Text style={styles.calcBodyResultsText}>Taxa de IV: </Text>
                            <Text style={styles.calcBodyResultsValue}>{resultado}</Text>
                        </View>
                        <Divider orientation="horizontal" />
                    </View>
                </View>
            </View>

        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fbfbfb",
        flex: 1,
    },
    calcHeader: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    calcHeaderText: {
        paddingVertical: 10,
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 25,
    },
    calcBodyHeader: {
        alignItems: "flex-start",
    },
    calcBodyHeaderText: {
        fontFamily: "Helvetica",
        fontWeight: "500",
        color: "grey",
        marginHorizontal: 20,
    },
    calcBody: {
        flex: 5,
        width: "100%",
    },
    calcBodyInput: {
        flex: 3,
        padding: 10,
    },
    calcBodyInputItem: {
        flexDirection: "row",
        marginVertical: 5,
        borderColor: "#56aa9d",
        borderRadius: 5,
        borderWidth: 2,
        padding: 18,
        justifyContent: "space-between",
    },
    calcBodyInputField: { 
        color: "#f38380",
        fontWeight: "bold",
        fontSize: 15,
    },
    calcBodyInputText: {
        color: "grey",
        fontWeight: "500",
        fontSize: 15,
    },
    calcResultsHeader: {
        justifyContent: "center",
        alignItems: "center",
    },
    calcResultsHeaderText: {
        fontFamily: "Helvetica",
        fontWeight: "500",
        color: "grey",
        marginHorizontal: 20,
        fontSize: 30
    },
    calcBodyResults: {
        flex: 1,
    },
    calcBodyResultsCard: {
        backgroundColor: "#56aa9d",
        padding: 20,
        margin: 10,
        borderRadius: 20,
    },
    calcBodyResultsItem: {
        flexDirection: "row",
        margin: 5,
        justifyContent: "space-between",
    },
    calcBodyResultsText: {
        width: "75%",
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: "Helvetica",
    },
    calcBodyResultsValue: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Helvetica",
    },
    calcBottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    calcButton: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: "32%",
        borderRadius: 10,
        backgroundColor: "#f38380",
        color: "white"
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
    },
    
});


export default CalcDrogas;

/* Formula:

dose (mcg/kg/min)
peso (kg)
concentração (mg)
dosagem (cc)

Taxa de IV: cc/hr



*/