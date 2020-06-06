import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import * as Speech from "expo-speech";
import { width as w, height as h } from "../../util/dimension";
import { color } from "../../constants/theme";
import HomeBtn from "../../components/HomeBtn";

const LetterDetail = ({ navigation, route }) => {
  const color = route?.params?.color;
  const name = route?.params?.name;
  const img = route?.params?.img;
  useEffect(() => {
    speak();
  }, []);

  const speak = () => {
    Speech.speak(`${name}`, {
      pitch: 0.8,
      rate: 0.8,
    });
  };
  return (
    <ImageBackground
      source={require("../../../assets/bg2.jpg")}
      style={styles.container}
    >
      <View style={styles.detailContainer}>
        <View>
          <Image style={styles.img} source={img} />
        </View>
        <View style={styles.separator}></View>
        <View style={{ height: h(40), justifyContent: "center" }}>
          <Text style={[styles.d3Text, { color: color }]}>
            {name?.toUpperCase()}
          </Text>
        </View>
        <View style={{ position: "absolute", top: -14, right: -8 }}>
          <HomeBtn navigation={navigation} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default LetterDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    width: w(90),
    height: h(85),
    backgroundColor: color.white,
    borderColor: color.primary,
    borderWidth: 3,
    borderRadius: 12,
    alignItems: "center",
  },
  img: {
    width: 140,
    height: 140,
    resizeMode: "center",
  },
  separator: {
    borderWidth: 5,
    borderColor: color.primary,
    width: w(90),
  },
  d3Text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff847c",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 70,
  },
});
