import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screen/Landing/Landing";
import WordList from "../screen/WordList/WordList";
import WordDetail from "../screen/WordDetail/WordDetail";
import LetterList from "../screen/LetterList/LetterList";
import LetterDetail from "../screen/LetterDetail/LetterDetail";
import GameList from "../screen/GameList/GameList";
import MathGame from "../screen/MathProblem/MathProblems";
import PronountiationGame from "../screen/PronountiationGame/PronountiationGame";
import Sketch from "../screen/SketchGame/SketchGame";
import Setting from "../screen/Setting/Setting";

const Stack = createStackNavigator();
const MyAppStack = () => {
  return (
    // <LetterList />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="wordList"
          component={WordList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="wordDetail"
          component={WordDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="letterList"
          component={LetterList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="letterDetail"
          component={LetterDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="gameList"
          component={GameList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mathGame"
          component={MathGame}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pronountiationGame"
          component={PronountiationGame}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sketchGame"
          component={Sketch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="setting"
          component={Setting}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyAppStack;
