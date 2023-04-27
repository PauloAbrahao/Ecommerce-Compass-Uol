import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "nome-da-fonte": require("./caminho/para/o/arquivo/da/fonte.ttf"),
    // adicione quantas fontes você precisar
  });
};

export default fetchFonts;