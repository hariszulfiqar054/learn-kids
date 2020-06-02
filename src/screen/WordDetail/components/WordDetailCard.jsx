import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { color } from "../../../constants/theme";
import { width, height } from "../../../util/dimension";

const WordDetailCard = ({ upper, lower, clr }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.upperContainer}>
          <View style={styles.separator}></View>
          <View style={styles.separator}></View>
          <View style={styles.separator}></View>
        </View>
        <View style={{ position: "relative", top: -120 }}>
          <Text style={[styles.d3Text, { color: clr }]}>
            <Text style={{ fontSize: 110 }}>{upper}</Text>
            <Text style={{ fontSize: 80 }}> {lower}</Text>
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
          <Text
            style={[
              styles.d3Text,
              { marginLeft: 10, marginTop: 10, color: clr },
            ]}
          >
            <Text style={{ fontSize: 80 }}>a</Text>

            <Text style={{ color: "grey", fontSize: 80 }}>pple</Text>
          </Text>
        </View>
      </View>
      <View>
        <Text style={[styles.d3Text, { fontSize: 90, color: clr }]}>
          {upper}
        </Text>
        <Text style={[styles.d3Text, { fontSize: 90, color: clr }]}>
          {lower}
        </Text>
      </View>
    </View>
  );
};

export default WordDetailCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: width(65),
    height: height(83),
    backgroundColor: color.white,

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
