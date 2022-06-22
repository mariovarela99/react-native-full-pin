import { StyleSheet, View } from "react-native";
import FullPin from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <FullPin
        pin={{
          pinLength: 4,
          onChange: (e) => {
            console.log("Change => ", e);
          },
          onCompleted: (e) => console.log("Completed => ", e),
        }}
        styles={{
          input: {
            backgroundColor: "#000000",
            backgroundColorWithValue: "#f00",
            borderColorWithValue: "#00f",
          },
          button: { backgroundColor: "#000000", borderColor: "#00f" },
          buttonText: { textColor: "#ffffff", fontSize: 18 },
        }}
      />
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
