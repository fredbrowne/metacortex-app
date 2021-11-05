import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import Firebase from '../components/Firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SigninScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('mainFlow'), {user: email})
            .catch(error => console.log(error))
    }
    return (
        <View style={styles.container}>
            <Spacer >
                <Image 
                    source={require('../../assets/splash.png')}
                    style={styles.logo}
                />
                <Text h4>Entrar</Text>
            </Spacer>
            <Input 
                label='E-mail'
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setEmail}
            />
            <Spacer />
            <Input
                secureTextEntry 
                label='Password'
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setPassword}

            />
            <Spacer>
                <Button 
                    title='Entrar'
                    onPress={handleLogin} 
                />
            </Spacer>
            <Spacer>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text>Não possui um login? Cadastre-se aqui!</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 30, 
        marginLeft: 30, 
        marginRight: 30,
        marginBottom: 200
    },
    logo: {
        width: 250,
        height: 100,
    }
});

export default SigninScreen;
