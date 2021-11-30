import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import AppNavigation from "./config/AppNavigation";
import Firebase from "./config/firebase";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  const [isSignedIn,setIsSignedIn] = useState(false);
  const [screen, setScreen] = useState("login");

  const checkInput = () => {
    if (!email) {
      Alert.alert(
        "E-mail em branco",
        "Por favor, preencha o campo de e-mail",
        {
          cancelable: true,
        }
      );
    } else if (!password) {
      Alert.alert(
        "Senha em branco",
        "Por favor, preencha o campo da senha",
        {
          cancelable: true,
        }
      );
    } else {
      handleLogin()
    }
  };
  const checkInputSignUp = () => {
    if (!email) {
      Alert.alert(
        "E-mail em branco",
        "Por favor, preencha o campo de e-mail",
        {
          cancelable: true,
        }
      );
    } else if (!password) {
      Alert.alert(
        "Senha em branco",
        "Por favor, preencha o campo da senha",
        {
          cancelable: true,
        }
      );
    } else {
      handleSignUp()
    }
  };

  const handleLogin = () => {
    Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          setIsSignedIn(true);
        })
        .catch((error) => {
          setUser(null);
          setIsSignedIn(false)
        });
  }
  const handleSignUp = () => {
    Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          setIsSignedIn(true);
        })
        .catch((error) => {
          console.log(error.code)
          setUser(null);
          setIsSignedIn(false)
          setEmail(null);
          setPassword(null);
        })
}
  if (!isSignedIn) {
    if (screen === 'login') {
      return (
        <SignIn handle={handleLogin} checkInput={checkInput} setPassword={setPassword} setEmail={setEmail} setScreen={setScreen} header={"Entrar"} />
      );
    } else if (screen === 'signup') {
      return (
        <SignUp handle={handleSignUp} checkInput={checkInputSignUp} setPassword={setPassword} setEmail={setEmail} setScreen={setScreen} header={"Criar Conta"}/>
      );
    }
  } else {
    return(
      <AppNavigation />
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
  }
});