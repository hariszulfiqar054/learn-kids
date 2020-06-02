import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { color } from "../../../constants/theme";
import { width, height } from "../../../util/dimension";

const WordDetailCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.upperContainer}>
          <View style={styles.separator}></View>
          <View style={styles.separator}></View>
          <View style={styles.separator}></View>
        </View>
        <View style={{ position: "relative", top: -120 }}>
          <Text style={styles.d3Text}>
            <Text style={{ fontSize: 110 }}>A</Text>
            <Text style={{ fontSize: 80 }}> a</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            top: -height(35),
            left: width(10),
          }}
        >
          <Image
            style={styles.img}
            source={require("../../../../assets/words/a.jpg")}
          />
          <Text style={[styles.d3Text, { marginLeft: 10, marginTop: 10 }]}>
            <Text style={{ fontSize: 80 }}>a</Text>

            <Text style={{ color: "grey", fontSize: 80 }}>pple</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WordDetailCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    width: width(65),
    height: height(83),
    backgroundColor: color.white,
    marginLeft: width(6),
    borderWidth: 3,
    borderColor: color.primary,
    borderRadius: 12,
  },
  separator: {
    borderWidth: 1,
    borderColor: color.primary,
  },
  upperContainer: {
    height: height(83) / 3.5,
    justifyContent: "space-between",
    marginTop: 12,
  },
  d3Text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff847c",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  img: {
    width: 152,
    height: 160,
  },
});
