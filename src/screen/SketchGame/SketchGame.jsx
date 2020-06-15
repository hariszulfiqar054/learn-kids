import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import Signature from "react-native-signature-canvas";
import HomeBtn from "../../components/HomeBtn";
import { window, color } from "../../constants/theme";
const { width, height } = window;
const SketchGame = ({ navigation }) => {
  const ref = React.createRef();

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
          <Signature ref={ref} descriptionText="Sketch Board" confirmText="" />
          <View style={{ position: "absolute", top: -14, right: -8 }}>
            <HomeBtn navigation={navigation} />
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default SketchGame;

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
