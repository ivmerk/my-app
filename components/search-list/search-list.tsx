import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SearchList({title}: {title: string}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '1%',
    paddingHorizontal: '10%',
    color: '#484848',
    textAlign: 'left',
  }
});
