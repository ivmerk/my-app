import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CallingTube } from "../svg-const/svg-const";

export default function CallToSellerItem() {
  return (
    <View style={styles.container}>
      <CallingTube />
      <Text style={styles.itemText}>Позвонить</Text>
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
    backgroundColor: '#484848',
  },
  itemText: {
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#fff',
    
  }
});
