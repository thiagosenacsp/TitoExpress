import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { Input } from "../../components/Input";
import { RoundedButton } from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";

export const HomeScreen = () => {
  const [checked, setChecked] = useState("1");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.todo}>
      <Image
        style={styles.logoImg}
        source={require("../../../../assets/layout/logo.png")}
      />
      <View style={styles.form}>
        <Input
          hasLabel
          label="E-mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          hasLabel
          label="Senha"
          placeholder="Digite sua senha"
          keyboardType="default"
          secureTextEntry
          value={senha}
          onChangeText={(text) => setSenha(text)}
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
          <Text>
            Não tem conta? Registre-se{" "}
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Text>agora!</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View>
          <RoundedButton
            lblButton="Entrar"
            onPress={() => {
              console.log("email: ", email);
              console.log("senha: ", senha);
            }}
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
