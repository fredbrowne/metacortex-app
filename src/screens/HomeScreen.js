import React from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';
/* Icons Import */
import { Feather, SimpleLineIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

const DeviceWidth = Dimensions.get('window').width

const HomeScreen = () => {
    return (
        <View style={styles.background}>
            <SearchBar />
            <View style={{
                marginTop: 10,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: "white"}}>
                <View>
                    <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1 }} >
                        <FontAwesome5 name="calculator" size='50px'/>
                    </View>
                    <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1 }} >
                        <FontAwesome5 name="thermometer" size='40px'/>
                    </View>
                </View>
                <View>
                    <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1 }} >
                        <FontAwesome5 name="file-medical" size='50px'/>
                    </View>
                </View>
                <View>
                    <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2 }} >
                        <FontAwesome5 name="pills" size='50px'/>
                    </View>
                </View>    
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default HomeScreen;