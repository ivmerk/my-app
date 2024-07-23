import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PhoneCallItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>PhoneCallItem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 40,
    paddingTop: 8, 
    paddingBottom: 8, 
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
  },
  itemText: {
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#484848',
    
  }
});
