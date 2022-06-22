import { StyleSheet, View } from "react-native";
import FullPin from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <FullPin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
