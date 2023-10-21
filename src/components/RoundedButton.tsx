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
    width: "100%",
    height: 40,
    backgroundColor: "#FF4646",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  lblButton: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
