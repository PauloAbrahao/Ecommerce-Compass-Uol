import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(150, 150, 150, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: 326,
    height: 194,
    padding: 20,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    marginBottom: 80,
  },
  closeText:{
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  closeArea:{
    alignItems: "flex-end",
  }
});

export default styles;
