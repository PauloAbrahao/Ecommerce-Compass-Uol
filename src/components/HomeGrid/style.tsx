import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    paddingTop: 10,
    paddingHorizontal: 13,
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
