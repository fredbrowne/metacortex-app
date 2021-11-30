import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, Keyboard, Pressable, Modal } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import { data } from './data';
import DiseaseDetail from './DiseaseDetail';

/* As informações vão ser recuperadas de uma API que será
desenvolvida. Esta API será populada através de webscraping de informações
de laboratórios e guias médicos oficiais. */


const DiseaseSearch = props => {
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);
    
    /* Item do resultado da busca */
    const renderItem = ({ item }) => (
        <DiseaseDetail 
            title={item.title} 
            description={item.description} 
            symptoms={item.symptoms}
            diagnostic={item.diagnostic}
            treatment={item.treatment}
            source={item.source}
            />
    );
    const searchData = (text) => {
        Keyboard.dismiss()
        if (text.length === 0) {
            setResults(data);
        } else {
            const newData = data.filter((item) => {
                return item.title.indexOf(text) > -1
            });
            setResults(newData);
            setSearchText(text)
        }
    };

    /* Ao receber um parametro da página inicial, alterar o state do texto de busca. */
    useEffect(() => {
        if (props.route.params !== undefined) {
            searchData(props.route.params.searchText)
        } else {
            searchData("")
        }
        setResults(data);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>NurseBag</Text>
                <Icon
                    name="bell"
                    type="font-awesome-5"
                    color="white" />
            </View>
            <View style={styles.searchBar}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        value={searchText}
                        style={styles.searchInput}
                        placeholder="Procurar"
                        placeholderTextColor="black"
                        onChangeText={searchText => setSearchText(searchText)}
                    />
                    <TouchableOpacity>
                        <Icon
                            onPress={() => searchData(searchText)}
                            reverse
                            name="search"
                            type="font-awesome-5"
                            color="#f38380" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.diseaseResults}>
                <Divider orientation="horizontal" />
                <View style={styles.mostCommonApps}>
                    <FlatList
                        data={results}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#56aa9d"
    },
    headerText: {
        color: "white",
        fontSize: 30,
        fontWeight: "400",
    },
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
        fontWeight: "100",
    },
    diseaseResults: {
        width: "100%",
        flex: 5,
        margin: 30,
        alignItems: "center",
    },
    
    mostCommonApps: {
        flex: 1,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    mostCommonAppsItem: {
        padding: 10,
        alignItems: "center",
    },
    item: {
        padding: 5,
    },
    title: {
        fontSize: 20,
        padding: 10
    },
    description: {
        padding: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});

export default DiseaseSearch;