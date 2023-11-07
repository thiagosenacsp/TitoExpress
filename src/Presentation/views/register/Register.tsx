import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ToastAndroid } from "react-native";
import { RadioButton } from "react-native-paper";
import { Input } from "../../components/Input";
import { RoundedButton } from "../../components/RoundedButton";

export const RegisterScreen = () => {
  const [checked, setChecked] = useState("1");
  return (
    <View style={styles.todo}>
      <Image
        style={styles.logoImg}
        source={require("../../../../assets/layout/logo.png")}
      />
      <View style={styles.form}>
        <Input
          hasLabel
          lblInput="Nome"
          placeholder="Digite seu nome"
          keyboardType="default"
        />
        <Input
          hasLabel
          lblInput="Sobrenome"
          placeholder="Digite seu sobrenome"
          keyboardType="default"
        />
        <Input
          hasLabel
          lblInput="E-mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
        />
        <Input
          hasLabel
          lblInput="Senha"
          placeholder="Digite sua senha"
          keyboardType="visible-password"
          secureTextEntry
        />
        <Input
          hasLabel
          lblInput="Confirme a senha"
          placeholder="Digite novamente a sua senha"
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
};

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
    padding: 24,
    gap: 16,
  },
  radioBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
