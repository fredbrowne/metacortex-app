import React, { useState, useEffect } from 'react';
import { FlatList, View, SafeAreaView, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import style from '../components/style';


const API_ENDPOINT = 'http://icd10api.com/?s=J09&desc=short&r=json';

const DiseaseScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
    
        fetch(API_ENDPOINT)
          .then(response => response.json())
          .then(results => {
            setData(results);
            setIsLoading(false);
          })
          .catch(err => {
            setIsLoading(false);
            setError(err);
          });
      }, []);
      if (isLoading) {
          return (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#5500dc" />
          </View>
        );
    }
    
    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18}}>
              Error fetching data... Check your network connection!
            </Text>
          </View>
        );
    }
    
    return (
        <SafeAreaView style={styles.background}>
            <SearchBar />

            <FlatList
                data={data["Search"]}
                keyExtractor={item => item.first}
                renderItem={({ item }) => (
                <View style={style.listItem}>
                    <View style={style.metaInfo}>
                        <Text style={style.textBold}>{item.Name} - {item.Description}</Text>
                    </View>
                </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default DiseaseScreen;