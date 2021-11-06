import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import style from '../components/style';
import CalcGot from '../screens/CalcGot';
import { Icon } from 'react-native-elements'

const Stack = createStackNavigator();

function CalcScreen({ navigation }) {
    return (
        <SafeAreaView>

            <View style={style.IconButton}>
                <View style={style.buttonCalc}>
                    <Icon reverse name='tint'  type='font-awesome-5'  color='#f38380' />
                    <Text style={style.txtCenter}>Gotejamento</Text>
                </View>
            </View>
            <View style={style.IconButton}>
                <View style={style.buttonCalc}>
                    <Icon reverse name='syringe'  type='font-awesome-5'  color='#f38380' />
                    <Text style={style.txtCenter}>Medicação Endovenosa</Text>
                </View>
            </View>
            <View style={style.IconButton}>
                <View style={style.buttonCalc}>
                    <Icon reverse name='prescription-bottle'  type='font-awesome-5'  color='#f38380'  />
                    <Text style={style.txtCenter}>Concentração Gotas/Comprimidos</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const CalculatorScreen = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Guia">
            <Stack.Screen name="Calculadores" component={CalcScreen} options={{title: 'Calculadores'}} />
            <Stack.Screen name="Gotejamento" component={CalcGot} options={{title: 'Gotejamento'}} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default CalculatorScreen;