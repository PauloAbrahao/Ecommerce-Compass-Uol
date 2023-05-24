import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  content: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",

    gap: 20,
    marginBottom: 10,
  },
});

export default styles;
