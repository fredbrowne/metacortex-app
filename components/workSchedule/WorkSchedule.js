import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';

const WorkSchedule = props => {
    const today = new Date();
    const currentPeriod = (today) => {
        let currentHour = today.getHours();
        if (currentHour < 12) {
            return "Manhã";
        } else if (currentHour < 18) {
            return "Tarde";
        } else {
            return "Noite";
        }
    }

    const convertedDayWeek = {
        "1": "Seg",
        "2": "Ter",
        "3": "Qua",
        "4": "Qui",
        "5": "Sex",
        "6": "Sab",
        "0": "Dom",   
    };

    function dates(current) {
        var week = new Array(); 
        // Starting Monday not Sunday
        current.setDate((current.getDate() - current.getDay() +1));
        for (var i = 0; i < 7; i++) {
            week.push(
                new Date(current)
            ); 
            current.setDate(current.getDate() +1);
        }
        return week; 
    }
    const week = dates(today);

    const activeDayOfWeek = (item, key) => {
        const today = new Date().getDate()
        if (item.getDate() == today) {
            return (
                <TouchableOpacity key={key} style={styles.calendarWeekItemActive}>
                        <Text key={key} style={styles.calendarWeekItemTextActive}>{ convertedDayWeek[item.getDay()] }</Text>
                        <Text key={item.getDate()} style={styles.calendarWeekItemTextActive}>{ item.getDate() }</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity key={key} style={styles.calendarWeekItem}>
                        <Text key={key} style={styles.calendarWeekItemText}>{ convertedDayWeek[item.getDay()] }</Text>
                        <Text key={item.getDate()} style={styles.calendarWeekItemText}>{ item.getDate() }</Text>
                </TouchableOpacity>
            )
        }
    }

    return(
        <View style={styles.container}>
            <Image source={require('./images/workSchedule.jpg')} />
            <Text style={styles.textHeader}>Escala de Trabalho</Text>
            <Text style={styles.textSubHeader}>Turno: {currentPeriod(today)}</Text>
            <View style={styles.calendarWeek}>
                { week.map((item, key)=>(
                    activeDayOfWeek(item, key)
                ))}
            </View>
            <View>

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
    textHeader: {
        paddingVertical: 5,
        fontSize: 25,
        fontWeight: "bold"
    },
    textSubHeader: {
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: "bold"
    },
    calendarWeek: {
        flexDirection: "row"
    },
    calendarWeekItem: {
        marginVertical: 10,
        borderRadius: 20,
        alignItems: "center",
    },
    calendarWeekItemActive: {
        marginVertical: 10,
        backgroundColor: "#56aa9d",
        borderRadius: 20,
        alignItems: "center",
    },
    calendarWeekItemText: {
        margin: 10,
    },
    calendarWeekItemTextActive: {
        margin: 10,
        color: "white",
    }
});

export default WorkSchedule;