import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface RoundedButtonProps {
  lblButton?: string;
  onPress?: () => void;
}

export const RoundedButton = ({ lblButton, onPress }: RoundedButtonProps) => {
  return (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      <Text style={styles.lblButton}>{lblButton}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF4646",
  },
  lblButton: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
