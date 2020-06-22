import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "../constants/theme";

const SettingBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ padding: 6 }}>
        <MaterialIcons name="settings" size={24} color={color.white} />
      </View>
    </TouchableOpacity>
  );
};

export default SettingBtn;

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
