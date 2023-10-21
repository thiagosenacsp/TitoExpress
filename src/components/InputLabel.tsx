import * as React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputLabelProps {
  lblInput?: string;
}

export const InputLabel = ({ lblInput }: InputLabelProps) => {
  return (
    <View style={styles.frmInput}>
      <Text style={styles.txtLabel}>E-mail</Text>
      <TextInput
        style={styles.txtForm}
        placeholder="Digite seu email!"
        keyboardType="email-address"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
