import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { color } from "../constants/theme";

const HomeBtn = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      <View style={{ padding: 6 }}>
        <FontAwesome5 name="home" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default HomeBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    borderRadius: 100,
    shadowColor: color.black,
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 7,
    borderColor: color.white,
    borderWidth: 2,
  },
});
