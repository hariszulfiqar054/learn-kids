import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screen/Landing/Landing";
import WordList from "../screen/WordList/WordList";
import WordDetail from "../screen/WordDetail/WordDetail";

const Stack = createStackNavigator();
const MyAppStack = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyAppStack;
