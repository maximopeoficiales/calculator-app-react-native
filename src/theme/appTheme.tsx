import { StyleSheet } from "react-native";

export const colorButtons = {
  orange: "#FF9427",
  gray: "#9B9B9B",
  black: "#333333"
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  result: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
    marginBottom: 10
  },
  resultSmall: {
    color: "rgba(255, 255, 255,0.5)",
    fontSize: 30,
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10
  }
});