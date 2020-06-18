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
import MoreGamesCard from "../../components/MoreGamesCard";

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
          <MoreGamesCard
            onPress={() => navigation.navigate("mathGame")}
            img={require("../../../assets/math.jpg")}
            label="Math Problems"
            clr="#43d8c9"
          />
          <MoreGamesCard
            img={require("../../../assets/sketch.jpg")}
            label="Sketching Page"
            onPress={() => navigation.navigate("sketchGame")}
            clr="gold"
          />
          <MoreGamesCard
            img={require("../../../assets/pronoun.jpg")}
            label="Word Pronunciation"
            onPress={() => navigation.navigate("pronountiationGame")}
            clr="violet"
          />

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
