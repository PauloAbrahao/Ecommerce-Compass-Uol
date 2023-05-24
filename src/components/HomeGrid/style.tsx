import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
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
    marginBottom: 20,
  },
});

export default styles;
