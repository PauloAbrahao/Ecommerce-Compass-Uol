import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    paddingTop: 100
  },
  content: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  square: {
    width: 180,
    height: 210,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
});

export default styles;
