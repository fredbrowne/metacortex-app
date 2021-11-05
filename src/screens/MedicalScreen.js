import React from 'react';
import { FlatList, View, SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import style from '../components/style';
import { Icon } from 'react-native-elements'
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchBar from '../components/SearchBar';
import {data} from '../components/cid10';
import DiseaseScreen from '../screens/Diseases';

const Stack = createStackNavigator();


function GuideScreen({ navigation }) {
    return (
        <SafeAreaView>

            <View style={style.twoIcons}>
                <View style={style.buttonIcon}>
                    <Icon reverse name='head-side-cough'  type='font-awesome-5'  color='#f50'  onPress={() => navigation.navigate('Disease')} />
                    <Text style={style.txtCenter}>Doenças</Text>
                </View>

                <View style={style.buttonIcon}>
                    <Icon reverse name='capsules'  type='font-awesome-5'  color='#f50'  onPress={() => navigation.navigate('Drugs')} />
                    <Text style={style.txtCenter}>Medicamentos</Text>
                </View>
            </View>
            
        </SafeAreaView>
    );
}

const MedicalScreen = ({navigation}) => {      
    return (
            <Stack.Navigator initialRouteName="Guia">
                <Stack.Screen name="Guia" component={GuideScreen} options={{title: 'Guias'}} />
                <Stack.Screen name="Disease" component={DiseaseScreen} options={{title: 'Doenças'}} />
                <Stack.Screen name="Drugs" component={DiseaseScreen} options={{title: 'Medicamentos'}} />
            </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default MedicalScreen;