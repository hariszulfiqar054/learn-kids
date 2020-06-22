import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Platform,
  TextInput,
} from "react-native";

import HomeBtn from "../../components/HomeBtn";
import { window, color } from "../../constants/theme";
import Buttons from "../GameList/components/Buttons";
import { changeLanguage } from "../../redux/Action";
import { useSelector, useDispatch } from "react-redux";

const { width, height } = window;

const Setting = ({ navigation }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
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
            <Text style={styles.d3Text}>Languages</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "8%",
            }}
          >
            <Buttons
              onPress={() => dispatch(changeLanguage("en"))}
              style={[
                styles.btn,
                {
                  backgroundColor: language == "en" ? "#d92027" : color.primary,
                },
              ]}
              label="English"
            />
            <Buttons
              onPress={() => dispatch(changeLanguage("es"))}
              style={[
                styles.btn,
                {
                  backgroundColor:
                    language === "es" ? "#d92027" : color.primary,
                },
              ]}
              label="Spanish"
            />
            <Buttons
              onPress={() => dispatch(changeLanguage("fr"))}
              style={[
                styles.btn,
                {
                  backgroundColor:
                    language === "fr" ? "#d92027" : color.primary,
                },
              ]}
              label="French"
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

export default Setting;

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
  d3Text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "pink",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 55,
  },
  btn: {
    width: 160,
  },
});
