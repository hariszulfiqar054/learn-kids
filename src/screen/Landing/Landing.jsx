import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Platform,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { window, color } from "../../constants/theme";
import LetterCard from "../../components/LetterCard";
import WordCard from "../../components/WordCard";
import HomeBtn from "../../components/HomeBtn";
import MoreGames from "../../components/MoreGames";

const { width, height } = window;

const Landing = ({ navigation }) => {
  const lettersStack = [
    {
      upper: "B",
      lower: "b",
      clr: "#fe8a71",
      name: "ball",
      img: require("../../../assets/words/b.jpg"),
    },
    {
      upper: "C",
      lower: "c",
      clr: "#ffd31d",
      name: "cup",
      img: require("../../../assets/words/c.png"),
    },
    {
      upper: "D",
      lower: "d",
      clr: "#ff5200",
      name: "dog",
      img: require("../../../assets/words/d.png"),
    },
    {
      upper: "A",
      lower: "a",
      clr: "#a8df65",
      name: "apple",
      img: require("../../../assets/words/a.jpg"),
    },
  ];

  const wordStack = [
    {
      word: "cake",
      img: require("../../../assets/letter/c.png"),
      clr: "#9852f9",
    },
    {
      word: "horse",
      img: require("../../../assets/letter/h.png"),
      clr: "#f67280",
    },
    {
      word: "clock",
      img: require("../../../assets/letter/c1.png"),
      clr: "#fa163f",
    },
    {
      word: "mountains",
      img: require("../../../assets/letter/m1.png"),
      clr: "#f6d186",
    },
  ];
  const _renderItem = ({ item, index }) => {
    return (
      <WordCard
        navigation={navigation}
        upper={item?.upper}
        lower={item?.lower}
        clr={item?.clr}
        img={item?.img}
        name={item?.name}
        pressAble
      />
    );
  };

  const renderItem = ({ item, index }) => (
    <LetterCard
      name={item?.word}
      img={item?.img}
      clr={item?.clr}
      navigation={navigation}
      pressAble
    />
  );

  const handleMoreGames = () => {
    navigation.navigate("gameList");
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
          <View>
            <Carousel
              data={lettersStack}
              renderItem={_renderItem}
              sliderWidth={220}
              itemWidth={180}
              layout="stack"
            />

            <Text style={styles.txt}>letters</Text>
          </View>
          <View>
            <Carousel
              data={wordStack}
              renderItem={renderItem}
              sliderWidth={220}
              itemWidth={180}
              layout="stack"
            />
            <Text style={styles.txt}>words</Text>
          </View>
          {/* <View style={{ position: "absolute", top: -14, right: -8 }}>
            <HomeBtn />
          </View> */}
          <View style={{ position: "absolute", bottom: 0, left: "39%" }}>
            <MoreGames onPress={handleMoreGames} />
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default Landing;

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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  txt: {
    fontSize: 40,
    color: color.white,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: -10,
  },
});
