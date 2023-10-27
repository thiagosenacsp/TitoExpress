import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { InputLabel } from "./src/components/InputLabel";
import { RoundedButton } from "./src/components/RoundedButton";

export default function App() {
  const [checked, setChecked] = useState("1");
  return (
    <View style={styles.todo}>
      {/* Comentario de Código*/}
      <Image
        style={styles.logoImg}
        source={require("./assets/layout/logo.png")}
      />
      {/*Criando o formulario de login*/}
      <View style={styles.form}>
        <InputLabel
          lblInput="E-mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
        />
        <InputLabel
          lblInput="Senha"
          placeholder="Digite sua senha"
          keyboardType="visible-password"
          secureTextEntry
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.radioBtn}>
            <RadioButton
              value="1"
              status={checked === "1" ? "checked" : "unchecked"}
              onPress={() => setChecked("1")}
            />
            <Text>Cliente</Text>
          </View>
          <View style={styles.radioBtn}>
            <RadioButton
              value="2"
              status={checked === "2" ? "checked" : "unchecked"}
              onPress={() => setChecked("2")}
            />
            <Text>Vendedor</Text>
          </View>
          <View style={styles.radioBtn}>
            <RadioButton
              value="3"
              status={checked === "3" ? "checked" : "unchecked"}
              onPress={() => setChecked("3")}
            />
            <Text>Entregador</Text>
          </View>
        </View>
        <View>
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
    backgroundColor: "#F1F1F1",
  },
  logoImg: {
    alignSelf: "center",
    marginTop: "20%",
  },
  form: {
    // width: "100%",
    // height: "50%",
    padding: 24,
    gap: 16
    // bottom: 0,
  },
  radioBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
