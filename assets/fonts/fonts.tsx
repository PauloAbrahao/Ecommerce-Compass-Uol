import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "Inter-Bold": require("./Inter-Bold.ttf"),
    "Inter-Medium": require("./Inter-Medium.ttf"),
    "Inter-SemiBold": require("./Inter-SemiBold.ttf"),
    "Khula-Bold": require("./Khula-Bold.ttf"),
    "Karla-Regular": require("./Karla-Regular.ttf"),
  });
};

export default fetchFonts;
