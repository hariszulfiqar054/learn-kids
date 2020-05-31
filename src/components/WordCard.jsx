import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../constants/theme";

const WordCard = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.uperContainer}>
        <View style={styles.separator}></View>
        <View style={styles.separator}></View>
        <View style={styles.separator}></View>
      </View>
      <View style={styles.txtContainer}>
        <Text style={{ textAlign: "center" }}>
          <Text style={styles.txt}>A</Text>
          <Text style={{ fontSize: 70 }}> a</Text>
        </Text>
      </View>
    </View>
  );
};

export default WordCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcf8e8",
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
  separator: {
    borderWidth: 1,
    borderColor: color.primary,
  },
  uperContainer: {
    width: 165,
    height: 210 / 3.5,
    justifyContent: "space-between",
    marginTop: 12,
    alignSelf: "center",
  },
  txt: {
    fontSize: 85,
  },
  txtContainer: {
    position: "relative",
    bottom: 90,
  },
});
