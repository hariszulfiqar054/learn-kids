import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import WordDetailCard from "./components/WordDetailCard";

const WordDetail = ({ navigation, route }) => {
  const upper = route?.params?.upper;
  const lower = route?.params.lower;
  const clr = route?.params?.color;
  const name = route?.params?.name;
  const img = route?.params?.img;
  return (
    <ImageBackground
      source={require("../../../assets/bg3.jpg")}
      style={styles.container}
    >
      <WordDetailCard
        name={name}
        upper={upper}
        lower={lower}
        clr={clr}
        img={img}
      />
    </ImageBackground>
  );
};

export default WordDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
