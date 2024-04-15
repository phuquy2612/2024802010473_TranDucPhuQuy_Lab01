import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});

const Square = ({ text, bgcolor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgcolor }]}>
    <Text>{text}</Text>
  </View>
);

const data = Array.from({ length: 15 }, (_, index) => index + 1);

export default () => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
};