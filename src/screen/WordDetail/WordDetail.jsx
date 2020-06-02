import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import * as Speech from "expo-speech";
import WordDetailCard from "./components/WordDetailCard";

const WordDetail = ({ navigation, route }) => {
  const upper = route?.params?.upper;
  const lower = route?.params.lower;
  const clr = route.params.color;
  return (
    <ImageBackground
      source={require("../../../assets/bg3.jpg")}
      style={styles.container}
    >
      <WordDetailCard upper={upper} lower={lower} clr={clr} />
    </ImageBackground>
  );
};

export default WordDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
