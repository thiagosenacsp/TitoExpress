import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { RootStackParamList } from "../../../../App";
import { Input } from "../../components/Input";
import { RoundedButton } from "../../components/RoundedButton";
import RegisterViewModel from "./ViewRegister";

export const RegisterScreen = () => {
  const [checked, setChecked] = useState(1);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { nome, sobrenome, email, senha, onChange, register } =
    RegisterViewModel();
  return (
    <ImageBackground
      style={styles.fundo}
      source={require("../../../../assets/layout/bg-signup.png")}
      resizeMode="cover"
    >
      <Image
        style={styles.logoImg}
        source={require("../../../../assets/layout/logo.png")}
      />
      <View style={styles.form}>
        <Input
          hasLabel
          label="Nome"
          placeholder="Digite seu nome"
          keyboardType="default"
          value={nome}
          property="nome"
          onChangeText={onChange}
        />
        <Input
          hasLabel
          label="Sobrenome"
          placeholder="Digite seu sobrenome"
          keyboardType="default"
          value={sobrenome}
          property="sobrenome"
          onChangeText={onChange}
        />
        <Input
          hasLabel
          label="E-mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          value={email}
          property="email"
          onChangeText={onChange}
        />
        <Input
          hasLabel
          label="Senha"
          placeholder="Digite sua senha"
          keyboardType="default"
          secureTextEntry
          value={senha}
          property="senha"
          onChangeText={onChange}
        />
        {/* <Input
          hasLabel
          label="Confirme a senha"
          placeholder="Digite novamente a sua senha"
          keyboardType="default"
          secureTextEntry
          value={senha}
        /> */}
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
              status={checked === 1 ? "checked" : "unchecked"}
              onPress={() => setChecked(1)}
            />
            <Text>Cliente</Text>
          </View>
          <View style={styles.radioBtn}>
            <RadioButton
              value="2"
              status={checked === 2 ? "checked" : "unchecked"}
              onPress={() => setChecked(2)}
            />
            <Text>Vendedor</Text>
          </View>
          <View style={styles.radioBtn}>
            <RadioButton
              value="3"
              status={checked === 3 ? "checked" : "unchecked"}
              onPress={() => setChecked(3)}
            />
            <Text>Entregador</Text>
          </View>
        </View>
        <View>
          <RoundedButton lblButton="Cadastrar" onPress={() => register()} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text>Já sou cadastrado</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    opacity: 0.9,
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
