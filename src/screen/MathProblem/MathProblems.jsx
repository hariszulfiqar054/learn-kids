import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Platform,
} from "react-native";
import { window } from "../../constants/theme";
import Buttons from "../GameList/components/Buttons";

const { width, height } = window;
const MathProblems = () => {
  const [solution, setSolution] = useState(0);
  const [result, setResult] = useState(null);
  const [question, setQuestion] = useState(null);

  const generateQuestion = () => {
    let operator = "";
    let operand1 = Math.floor(Math.random() * 9 + 1);
    let operand2 = Math.floor(Math.random() * 9 + 1);
    let expression = "";
    let temp1 = Math.floor(Math.random() * 3 + 1);
    if (temp1 === 1) operator = "+";
    if (temp1 === 2) operator = "-";
    else operator = "*";
    expression = operand1 + " " + operator + " " + operand2;
    setQuestion(expression);
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
          <Buttons style={styles.startGameBtn} label="Start Game" />
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default MathProblems;

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
  startGameBtn: {
    backgroundColor: "violet",
    width: 120,
    alignSelf: "center",
    position: "absolute",
    bottom: 12,
  },
});
