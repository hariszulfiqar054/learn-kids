import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { color } from "../constants/theme";

const MoreGamesCard = ({ label, img, onPress, clr }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={img}
      />
      <Text style={[styles.d3Text, { color: clr }]}>
        {label?.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default MoreGamesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    width: 170,
    height: 230,
    borderColor: color.primary,
    borderWidth: 3,
    borderRadius: 10,
    shadowColor: color.black,
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  d3Text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff847c",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 30,
  },
});
