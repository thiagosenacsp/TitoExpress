import * as React from "react";
import { KeyboardType, StyleSheet, Text, TextInput, View } from "react-native";

interface InputProps {
  hasLabel?: boolean;
  label?: string;
  keyboardType: KeyboardType;
  placeholder?: string;
  property?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (property: string, value: any) => void;
}

export const Input = ({
  hasLabel,
  keyboardType,
  label,
  onChangeText,
  placeholder,
  property,
  secureTextEntry = false,
  value,
}: InputProps) => {
  return (
    <View style={styles.frmInput}>
      {hasLabel && <Text style={styles.txtLabel}>{label}</Text>}
      <TextInput
        style={styles.txtForm}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => onChangeText(property, text)}
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
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
  },
});
