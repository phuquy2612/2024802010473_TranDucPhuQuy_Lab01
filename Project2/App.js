import React from "react";
import { View, Button, TouchableOpacity, StyleSheet, Text } from "react-native";

const Project2 = () => {
  return (
    <View style={styles.container}>
      <Button title="Button 1" onPress={() => alert("Hello 1")} />
      <TouchableOpacity style={styles.button} onPress={() => alert("Hello 2")}>
        <Text style={styles.text}>
          Button 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Project2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    marginTop: 10,
    alignItems: "center",
    padding: 10
  },
  text: {
    color: "white",
    fontSize: 18
  }
});