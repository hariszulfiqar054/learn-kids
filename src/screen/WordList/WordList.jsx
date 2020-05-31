import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Platform,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { window } from "../../constants/theme";
import WordCard from "../../components/WordCard";

import { width as w, height as h } from "../../util/dimension";
import { wordListData } from "./wordsData";
const { width, height } = window;

const WordList = () => {
  const _renderItem = ({ item, index }) => {
    return (
      <WordCard
        upper={item?.upper}
        lower={item?.lower}
        clr={item?.clr}
        img={item?.img}
      />
    );
  };

  return (
    <ImageBackground
      source={require("../../../assets/bg1.jpg")}
      style={styles.container}
    >
      <View style={{ borderColor: "#fff", borderWidth: 3, borderRadius: 8 }}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../../../assets/landingbg.jpg")}
        >
          <View style={{ marginTop: h(10) }}>
            <Carousel
              data={wordListData}
              renderItem={_renderItem}
              sliderWidth={width}
              itemWidth={180}
            />
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default WordList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "orange",
  },
  bgImage: {
    height: height - 70,
    width: width - 50,
  },
});
