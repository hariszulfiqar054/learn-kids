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
import LetterCard from "../../components/LetterCard";
import HomeBtn from "../../components/HomeBtn";
import { width as w, height as h } from "../../util/dimension";
import { letterData } from "./letterData";
const { width, height } = window;

const LetterList = ({ navigation }) => {
  const _renderItem = ({ item, index }) => {
    return (
      <LetterCard
        navigation={navigation}
        clr={item?.clr}
        img={item?.img}
        name={item?.word}
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
              data={letterData}
              renderItem={_renderItem}
              sliderWidth={width}
              itemWidth={180}
            />
          </View>
          <View style={{ position: "absolute", top: -14, right: -8 }}>
            <HomeBtn navigation={navigation} />
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default LetterList;

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
