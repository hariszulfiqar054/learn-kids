import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { color } from "../../../constants/theme";

const Buttons = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.d3Text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#40bad5",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    elevation: 7,
    borderRadius: 12,
  },
  d3Text: {
    textAlign: "center",
    fontWeight: "bold",
    color: color.white,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    padding: 8,
    fontSize: 19,
  },
});
