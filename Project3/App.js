import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    height: 60,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    margin: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

const Project3 = () => {
  const handleSayHello = () => {
    alert("Hello!");
  };

  const handleSayGoodbye = () => {
    alert("Goodbye!");
  };

  return (
    <View style={myStyles.container}>
      <TouchableOpacity style={{ ...myStyles.button, backgroundColor: 'red' }} onPress={handleSayHello}>
        <Text style={myStyles.text}>Say Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...myStyles.button, backgroundColor: 'blue' }} onPress={handleSayGoodbye}>
        <Text style={myStyles.text}>Say Goodbye</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Project3;