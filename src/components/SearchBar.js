import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
    return (
        <View style = {styles.backgroundStyle}>
            <TextInput style={styles.inputStyle} placeholder='Buscar'/>
            <Feather style={styles.iconStyle} name="search" size={30} />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 14,
        marginHorizontal: 15
    },
    iconStyle: {
        backgroundColor: '#fa8072',
        color: 'white',
        width: 40,
        height: 40,
        fontSize: 25,
        alignSelf: 'center',
        borderRadius: 8,
        paddingLeft: 7,
        paddingTop: 6,
        alignItems: 'center'
    }
});

export default SearchBar;