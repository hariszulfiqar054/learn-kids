import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { color } from "../constants/theme";

const WordCard = ({
  style,
  upper,
  lower,
  img,
  clr,
  name,
  navigation,
  pressAble,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        pressAble
          ? navigation?.navigate("wordList")
          : navigation.navigate("wordDetail", {
              lower: lower,
              upper: upper,
              color: clr,
              name: name,
              img: img,
            })
      }
      style={[styles.container, style]}
    >
      <View style={styles.uperContainer}>
        <View style={styles.separator}></View>
        <View style={styles.separator}></View>
        <View style={styles.separator}></View>
      </View>
      <View style={styles.txtContainer}>
        <Text style={[styles.d3Text, { color: clr }]}>
          <Text style={styles.txt}>{upper}</Text>
          <Text style={{ fontSize: 65 }}> {lower}</Text>
        </Text>
      </View>
      <Image style={styles.img} source={img} />
    </TouchableOpacity>
  );
};

export default WordCard;

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
    fontSize: 83,
  },
  txtContainer: {
    position: "relative",
    bottom: 90,
  },
  d3Text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff847c",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    position: "absolute",
    top: "40%",
    // right: 50,
    left: 30,
  },
});
