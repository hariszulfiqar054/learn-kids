import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Platform,
  TextInput,
} from "react-native";
import * as Speech from "expo-speech";
import HomeBtn from "../../components/HomeBtn";
import { window, color } from "../../constants/theme";
import Buttons from "../GameList/components/Buttons";

const { width, height } = window;

export default function PronountiationGame({ navigation }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    Speech.speak("Hi i'm your pronunciation instructor", {
      pitch: 0.8,
      rate: 0.8,
    });
  }, []);

  const onPronounce = () => {
    if (input?.length > 0) {
      Speech.speak(input, {
        pitch: 0.8,
        rate: 0.8,
      });
      setInput(null);
    } else {
      Speech.speak("Text field is empty", {
        pitch: 0.8,
        rate: 0.8,
      });
    }
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
          <View>
            <TextInput
              onChangeText={(text) => setInput(text)}
              style={styles.txtInput}
              placeholder="Enter word or sentence to pronounce"
              value={input}
            />
          </View>
          <Buttons style={styles.btn} label="Pronounce" onPress={onPronounce} />
          <View style={{ position: "absolute", top: -14, right: -8 }}>
            <HomeBtn navigation={navigation} />
          </View>
          <View
            style={{ position: "absolute", bottom: 20, alignSelf: "center" }}
          >
            <Text>
              <Text style={{ fontWeight: "bold" }}>Instructions:</Text>
              <Text> Enter word or sentence in text field. </Text>
            </Text>
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
  },
  txtInput: {
    backgroundColor: color.white,
    borderWidth: 1,
    marginTop: 17,
    width: "60%",
    alignSelf: "center",
    padding: 7,
  },
  btn: {
    width: "30%",
    alignSelf: "center",
    marginTop: 25,
    backgroundColor: "#d597ce",
  },
});
