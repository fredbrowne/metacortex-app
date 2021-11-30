import React from 'react';
import { ImageBackground, View, StyleSheet, TextInput, Pressable, Text, TouchableOpacity } from 'react-native';

const SignIn = (props) => {
    return(
        <View style={styles.loginScreen}>
            <ImageBackground source={require('./images/authBackground.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.header}>{props.header}</Text>
                <Text style={styles.subHeader}>Por favor coloque suas credenciais</Text>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.input}
                        placeholder='E-mail'
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={props.setEmail}
                        value={props.email}
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={props.setPassword}
                        value={props.password}
                    />
                    <View style={styles.buttonView}>
                        <Pressable style={styles.button} title="Entrar" onPress={props.checkInput} >
                            <Text style={styles.buttonText}>Entrar</Text>
                        </Pressable>
                    </View>
                    <TouchableOpacity style={styles.footer} onPress={() => props.setScreen('signup')}>
                        <Text>Não possui um login? Cadastre-se aqui!</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    loginScreen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    image: {
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
    header: {
        fontSize: 30,
        paddingHorizontal: 40,
        paddingVertical: 15,
    },
    subHeader: {
        fontSize: 15,
        paddingHorizontal: 40,
        color: "grey",
        opacity: 0.5,
    },
    form: {
        justifyContent: "center",
    },
    input: {
        marginVertical: 10,
        marginHorizontal: 40,
        padding: 20,
        fontSize: 15,
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
    },
    footer: {
        justifyContent: "center",
        alignItems: "center"
    },
    buttonView: {
        marginVertical: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: "32%",
        borderRadius: 10,
        backgroundColor: "#f38380",
        color: "white"
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
    },
});

export default SignIn;