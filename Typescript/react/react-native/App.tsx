import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [n, setN] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Hello, React Native (Expo) - count {n}</Text>
      <Button title="Press me" onPress={() => { setN(n + 1); }} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
