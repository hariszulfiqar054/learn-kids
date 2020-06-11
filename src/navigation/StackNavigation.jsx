import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screen/Landing/Landing";
import WordList from "../screen/WordList/WordList";
import WordDetail from "../screen/WordDetail/WordDetail";
import LetterList from "../screen/LetterList/LetterList";
import LetterDetail from "../screen/LetterDetail/LetterDetail";
import GameList from "../screen/GameList/GameList";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyAppStack;
