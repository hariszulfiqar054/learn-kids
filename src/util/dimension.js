import { Dimensions } from "react-native";
import handleSize from "./handlesize";

const myWidth = Dimensions.get("window").width;
const myHeight = Dimensions.get("window").height;

const width = (num) => myWidth * handleSize(num);
const height = (num) => myHeight * handleSize(num);
export { width, height };
