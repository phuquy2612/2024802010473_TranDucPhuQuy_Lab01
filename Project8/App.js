import React from "react";
import { FlatList, Text, View, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  name: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "rgb(170, 170, 170)",
  },
});

export default () => {
  const PEOPLE = [
    {
      name: {
        title: "Ms",
        first: "Maeva",
        last: "Scott",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Maëlle",
        last: "Henry",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Mohamoud",
        last: "Faaij",
      },
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
    </View>
  );

  return (
    <FlatList
      data={PEOPLE}
      keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};
