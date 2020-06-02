import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WordList from "../screen/WordList/WordList";
import WordDetail from "../screen/WordDetail/WordDetail";

const Stack = createStackNavigator();
const MyAppStack = () => {
  return (
    <WordDetail />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="wordlist"
    //       component={WordList}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default MyAppStack;
