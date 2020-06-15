import React, { useState } from "react";
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
import { window } from "../../constants/theme";
import Buttons from "../GameList/components/Buttons";

const { width, height } = window;
const MathProblems = ({ navigation }) => {
  const [solution, setSolution] = useState(0);
  const [result, setResult] = useState(null);
  const [question, setQuestion] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);
  const [answer, setAnswer] = useState(null);

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
    setNum1(operand1);
    setNum2(operand2);
    setOp(operator);
    setQuestion(expression);
  };

  const onStartGame = () => {
    generateQuestion();
    setGameStart(true);
  };

  const onEndGame = () => {
    setGameStart(false);
  };

  const onCheckAnswer = () => {
    if (parseInt(answer) === parseInt(eval(question))) {
      setResult("correct");
      setAnswer(null);
      generateQuestion();
    } else setResult("In correct");
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
          {gameStart ? (
            <View>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <View>
                  <Text style={styles.d3Text}>
                    <Text style={{ color: "orange" }}>{num1} </Text>
                    <Text style={{ color: "purple" }}>{op}</Text>
                    <Text style={{ color: "gold" }}> {num2}</Text>
                    <Text> =</Text>
                  </Text>
                </View>
                <TextInput
                  onChangeText={(text) => setAnswer(text)}
                  style={styles.txtInput}
                  placeholder="Enter Answer"
                  value={answer}
                  keyboardType="number-pad"
                />
              </View>
              <Buttons
                style={styles.checkAnswer}
                label="Check Answer"
                onPress={onCheckAnswer}
              />
              <View style={{ alignSelf: "center" }}>
                <Text
                  style={[
                    styles.d3Text,
                    {
                      fontSize: 30,
                      color:
                        result === "correct"
                          ? "#21bf73"
                          : result === "In correct"
                          ? "red"
                          : "#ff7315",
                    },
                  ]}
                >
                  Status: {result}
                </Text>
              </View>
            </View>
          ) : (
            <View>
              <Text style={[styles.d3Text, { fontSize: 50, color: "#ffa41b" }]}>
                Start The Game
              </Text>
            </View>
          )}

          {!gameStart ? (
            <Buttons
              style={styles.startGameBtn}
              label="Start Game"
              onPress={onStartGame}
            />
          ) : (
            <Buttons
              style={[styles.startGameBtn, { backgroundColor: "#ee4540" }]}
              label="End Game"
              onPress={onEndGame}
            />
          )}
          <View style={{ position: "absolute", top: -14, right: -8 }}>
            <HomeBtn navigation={navigation} />
          </View>
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
    width: 190,
    alignSelf: "center",
    position: "absolute",
    bottom: 12,
  },
  d3Text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff847c",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 90,
  },
  txtInput: {
    backgroundColor: "white",
    height: "40%",
    fontSize: 40,
    marginTop: 49,
    marginLeft: 12,
  },
  checkAnswer: {
    width: 160,
    alignSelf: "center",
  },
});
