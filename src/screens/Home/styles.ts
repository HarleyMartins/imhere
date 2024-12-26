import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },

  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },

  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#FFF",
    padding: 10,
    fontSize: 16,
    marginRight: 12,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
    textAlign: "center",
  },

  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 36,
    marginBottom: 42,
  },

  textListEmpty: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
  },
});
