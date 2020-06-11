import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { color } from "../constants/theme";

export default function MoreGames({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.d3Text}>More Games</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#40bad5",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,

    borderTopStartRadius: 17,
    borderTopEndRadius: 17,
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
