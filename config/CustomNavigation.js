import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/* Telas */
/* Calculadoras */
import CalculatorScreen from '../components/calculators/CalculatorScreen';
import CalcHarrisBenedict from '../components/calculators/CalcHarrisBenedict';
import CalcParkland from '../components/calculators/CalcParkland';
import CalcDrogas from '../components/calculators/CalcDrogas';
/* Tasks */
import Tasks from '../components/tasks/Tasks';
import TaskList from '../components/tasks/TaskList';

const Stack = createStackNavigator();

const CalculatorsNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                options={{headerShown: false}}
                name="CalculatorScreen"
                component={CalculatorScreen}
            />
            <Stack.Screen 
                name="Equação de Harris Benedict"
                component={CalcHarrisBenedict}
            />
            <Stack.Screen 
                name="Fórmula de Parkland"
                component={CalcParkland}
            />
            <Stack.Screen 
                name="Cálculo de Drogas IV"
                component={CalcDrogas}
            />
        </Stack.Navigator>
    )
}
export {CalculatorsNavigation};

const TasksNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                options={{headerShown: false}}
                name="Tarefas"
                component={Tasks}
            />
            <Stack.Screen 
                name="Pendente"
                component={TaskList}
                options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen 
                name="Em Andamento"
                component={TaskList}
                options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen 
                name="Concluído"
                component={TaskList}
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>
    )
}
export {TasksNavigation};