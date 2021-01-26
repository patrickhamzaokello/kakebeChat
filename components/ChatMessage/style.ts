import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  Container: {
    padding: 10,
  },
  messageBox: {
    borderRadius: 5,
    padding: 10,
  },

  name: {
    color: Colors.light.tint,

    marginBottom: 5,

    fontWeight: "bold",
  },
  message: {},
  time: {
    alignSelf: "flex-end",
    color: "gray",
  },
});

export default styles;
