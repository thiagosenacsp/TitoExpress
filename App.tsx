import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
} from "react-native";
import { RoundedButton } from "./src/components/RoundedButton";

export default function App() {
  return (
    <View style={styles.todo}>
      {/* Comentario de Código*/}
      <Image
        style={styles.logoImg}
        source={require("./assets/layout/logo.png")}
      />
      {/*Criando o formulario de login*/}
      <View style={styles.form}>
        <View style={styles.frmInput}>
          <Text style={styles.txtLabel}>E-mail</Text>
          <TextInput
            style={styles.txtForm}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.frmInput}>
          <Text style={styles.txtLabel}>Senha</Text>
          <TextInput
            style={styles.txtForm}
            placeholder="Digite sua senha"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          {/*<Button
            title="Entar"
            color="#f00"
            //onPress={() => ToastAndroid.show('Sucesso!', ToastAndroid.LONG)}
          />*/}
          <RoundedButton
            lblButton="Entrar"
            onPress={() => ToastAndroid.show("Sucesso!", ToastAndroid.SHORT)}
          />
        </View>
      </View>
    </View>
  );
}
// Criando CSS para a View e texto
const styles = StyleSheet.create({
  todo: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f2f1",
  },
  logoImg: {
    alignSelf: "center",
    marginTop: "20%",
  },
  form: {
    width: "100%",
    height: "50%",
    padding: 30,
    position: "absolute",
    bottom: 0,
  },
  frmInput: {
    flexDirection: "column",
    marginTop: 30,
  },
  txtLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  txtForm: {
    width: "100%",
    padding: 5,
    paddingLeft: 25,
    fontSize: 14,
    borderColor: "#aaa",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 25,
  },
});
