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
    backgroundColor: color.white,
    width: 170,
    height: 210,
    borderColor: color.primary,
    borderWidth: 3,
    borderRadius: 10,
    shadowColor: color.black,
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 9,
  },
});
