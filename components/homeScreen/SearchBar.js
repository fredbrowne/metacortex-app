import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


const SearchBar = props => {
    const [searchText, setSearchText] = useState("");
    return(
        <View style={styles.searchBar}>
            <View style={styles.searchBarContainer}>
                <TextInput 
                    style={styles.searchInput}
                    placeholder="Procurar"
                    placeholderTextColor="black"
                    onChangeText={searchText => setSearchText(searchText)}
                />
                <TouchableOpacity>
                    <Icon
                        onPress={() => props.navigation.navigate("Guia Doenças", {searchText: searchText})}
                        reverse
                        name="search"
                        type="font-awesome-5"
                        color="#f38380" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        width: "100%",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#56aa9d",
    },
    searchBarContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
    },
    searchInput: {
        paddingLeft: 20,
        backgroundColor: "white",
        width: "65%",
        height: "40%",
        fontSize: 20,
        fontWeight: "100"
    },
});

export default SearchBar;