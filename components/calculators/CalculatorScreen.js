import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const CalculatorScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image source={require('./images/calculatorScreen.jpg')} />
            <View style={styles.calcIconList}>
                <TouchableOpacity style={styles.calcIconItem} onPress={() => navigation.navigate("Fórmula de Parkland", {msg: "Fórmula de Parkland"})}>
                    <Icon
                        reverse
                        name='calculator'
                        type='font-awesome-5'
                        color='#534741' />
                    <Text style={styles.calcIconItemText}>Fórmula de Parkland</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calcIconItem} onPress={() => navigation.navigate("Equação de Harris Benedict", {msg: "Harris Benedict"})}>
                    <Icon
                        reverse
                        name='calculator'
                        type='font-awesome-5'
                        color='#ba9bc9' />
                    <Text style={styles.calcIconItemText}>Equação de Harris Benedict</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calcIconItem} onPress={() => navigation.navigate("Cálculo de Drogas IV", {msg: "Taxa de IV"})}>
                    <Icon
                        reverse
                        name='calculator'
                        type='font-awesome-5'
                        color='#fb8787' />
                    <Text style={styles.calcIconItemText}>Cálculo de Drogas IV</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calcIconItem}>
                    <Icon
                        reverse
                        opacity={0.3}
                        name='calculator'
                        type='font-awesome-5'
                        color='#ffb95b' />
                    <Text style={styles.calcIconItemText}>CALL Score</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.calcIconList}>
                <TouchableOpacity style={styles.calcIconItem}>
                    <Icon
                        reverse
                        opacity={0.3}
                        name='calculator'
                        type='font-awesome-5'
                        color='#32666a' />
                    <Text style={styles.calcIconItemText}>Urgências Pediátricas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calcIconItem}>
                    <Icon
                        reverse
                        opacity={0.3}
                        name='calculator'
                        type='font-awesome-5'
                        color='#625e6d' />
                    <Text style={styles.calcIconItemText}>Perda de Sensibilidade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calcIconItem}>
                    <Icon
                        reverse
                        opacity={0.3}
                        name='calculator'
                        type='font-awesome-5'
                        color='#8cc63f' />
                    <Text style={styles.calcIconItemText}>Molaridade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calcIconItem}>
                    <Icon
                        reverse
                        opacity={0.3}
                        name='calculator'
                        type='font-awesome-5'
                        color='#d9e021' />
                    <Text style={styles.calcIconItemText}>Diluição de Medicamento</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.calcIconList}>
                <TouchableOpacity style={styles.calcIconItem}>
                    <Icon
                        reverse
                        opacity={0.3}
                        name='calculator'
                        type='font-awesome-5'
                        color='#3fafe0' />
                    <Text style={styles.calcIconItemText}>Cálculo de GLASGOW</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calcIconItem}>
                    <Icon
                        reverse
                        opacity={0.3}
                        name='calculator'
                        type='font-awesome-5'
                        color='#e55239' />
                    <Text style={styles.calcIconItemText}>Cálculo de DOWTON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calcIconItem}>
                    <Icon
                        opacity={0.3}
                        reverse
                        name='calculator'
                        type='font-awesome-5'
                        color='#d89621' />
                    <Text style={styles.calcIconItemText}>Calculadora de Braden</Text>
                </TouchableOpacity>
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
    calcIconList: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    calcIconItem: {
        padding: 5,
        width: 80,
        alignItems: "center",
    },
    calcIconItemText: {
        fontSize: 10,
        textAlign: "center",
        fontWeight: "bold",        
    },
});

export default CalculatorScreen;