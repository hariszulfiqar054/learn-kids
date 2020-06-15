import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Platform,
} from "react-native";
import HomeBtn from "../../components/HomeBtn";
import { window } from "../../constants/theme";
import Buttons from "./components/Buttons";

const { width, height } = window;
export default function GameList({ navigation }) {
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
          <Buttons
            label="Math Problems"
            onPress={() => navigation.navigate("mathGame")}
          />
          <Buttons label="Word Pronunciation" />
          <Buttons label="Word Pronunciation" />
          <View style={{ position: "absolute", top: -14, right: -8 }}>
            <HomeBtn navigation={navigation} />
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
}

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
});
