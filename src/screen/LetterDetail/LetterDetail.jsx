import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { width as w, height as h } from "../../util/dimension";
import { color } from "../../constants/theme";

const LetterDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: "",
            }}
          />
        </View>
        <View style={styles.separator}></View>
      </View>
    </View>
  );
};

export default LetterDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    width: w(90),
    height: h(85),
    backgroundColor: color.white,
    borderColor: color.primary,
    borderWidth: 3,
    borderRadius: 12,
    alignItems: "center",
  },
  img: {
    width: 140,
    height: 140,
  },
  separator: {
    borderWidth: 5,
    borderColor: color.primary,
    width: w(90),
  },
});
