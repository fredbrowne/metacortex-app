import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "COVID-19 Vacina",
      date: "05/11/2021",
      description: "O Brasil já aplicou mais de 101 milhões de doses de vacinas somando a primeira e a segunda doses e a dose única",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "COVID-19",
      date: "02/11/2021",
      description: "Com recordes de contágio, países europeus voltam com as medidas anti-Covid.",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "COVID-19",
      date: "20/10/2021",
      description: "Manifestantes protestam contra medidas de restrição na Holanda.",
    },
];

const Articles = (props) => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.articleItem}>
                <Text style={styles.articleItemDate}>{item.date}</Text>
                <Text style={styles.articleItemTitle}>{item.title}</Text>
                <Text style={styles.articleItemDescription}>{item.description}</Text>
            </TouchableOpacity>
        );
    };

    return(
        <View style={styles.articles}>
            {/* Estes artigos vão fazer parte de nosso backend
                onde um webscraping vai compilar as principais
                noticias do dia para enviar ao app */}
            <Text style={styles.articleHeader}>Artigos de saúde</Text>
            <View>
                <FlatList
                    horizontal
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    articles: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    articleHeader: {
        fontSize: 20,
        fontWeight: "300"
    },
    articleItem: {
        flex: 1,
        backgroundColor: "#56aa9d",
        marginHorizontal: 20,
        marginTop: 10,
        width: 300,
        height: "70%",
        borderRadius: 20,
        padding: 15,
        
    },
    articleItemDate: {
        color: "white",
        fontWeight: "bold",
        padding: 5,
    },
    articleItemTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        padding: 5
    },
    articleItemDescription: {
        color: "white",
        flexWrap: "wrap",
        fontSize: 12,
        paddingLeft: 5
    },
});

export default Articles;