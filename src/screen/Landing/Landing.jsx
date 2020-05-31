import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Platform,
} from "react-native";
import { window, color } from "../../constants/theme";
import LetterCard from "../../components/LetterCard";
import WordCard from "../../components/WordCard";
import HomeBtn from "../../components/HomeBtn";

const { width, height } = window;

const Landing = () => {
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
          <View>
            <WordCard />
            <Text style={styles.txt}>words</Text>
          </View>
          <View>
            <LetterCard />
            <Text style={styles.txt}>letters</Text>
          </View>
          <View style={{ position: "absolute", top: -14, right: -8 }}>
            <HomeBtn />
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default Landing;

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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  txt: {
    fontSize: 25,
    color: color.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});
