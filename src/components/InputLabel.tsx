import * as React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputLabelProps {
  lblInput?: string;
  keyboardType:
    | "email-address"
    | "numeric"
    | "visible-password"
    | "url"
    | "web-search";
  placeholder?: string;
  secureTextEntry?: boolean;
}

export const InputLabel = ({
  keyboardType,
  lblInput,
  placeholder,
  secureTextEntry,
}: InputLabelProps) => {
  return (
    <View style={styles.frmInput}>
      <Text style={styles.txtLabel}>{lblInput}</Text>
      <TextInput
        style={styles.txtForm}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frmInput: {
    flexDirection: "column",
    gap: 8,
  },
  txtLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  txtForm: {
    width: "100%",
    padding: 5,
    paddingLeft: 20,
    fontSize: 14,
    backgroundColor: "#FFF",
    borderColor: "#AAAAAA",
    borderWidth: 1,
    borderRadius: 20,
  },
});
