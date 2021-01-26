import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
    width: 200,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },

  status: {
    fontSize: 16,
    color: "gray",
  },
});

export default styles;
