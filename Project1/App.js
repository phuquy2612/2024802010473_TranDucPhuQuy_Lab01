import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Project1 = () => {
  return (
    <View style={myStyles.container}>
      <Text style={myStyles.text}>Hello world</Text>
    </View>
  );
};

export default Project1;

const myStyles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
}); 