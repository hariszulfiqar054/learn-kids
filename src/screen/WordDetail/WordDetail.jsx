import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import WordCard from "../../components/WordCard";
import WordDetailCard from "./components/WordDetailCard";

const WordDetail = () => {
  return (
    <ImageBackground
      source={require("../../../assets/bg3.jpg")}
      style={styles.container}
    >
      <WordDetailCard />
    </ImageBackground>
  );
};

export default WordDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
