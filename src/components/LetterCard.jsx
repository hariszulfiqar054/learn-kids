import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../constants/theme";

const LetterCard = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

export default LetterCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcf8e8",
    width: 170,
    height: 210,

    borderColor: color.primary,
    borderWidth: 3,
    borderRadius: 10,
  },
});
