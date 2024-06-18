import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";


export default function SearchBar() {
const [inputText, setInputText] = useState('');
  return (
    <Pressable onPress={() => console.log('press')}>
    <View style={styles.container}>
      {inputText === '' &&
      (<Text style={styles.placeholder}>
        <Text>🔍 Поиск товаров на</Text>
        <Text style={{ fontWeight: 'bold' }}> HANTIFY</Text>
      </Text>
      )}
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
      />
    </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 9,
    borderBottomWidth: 1,
  },
  placeholder: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  },
  input: {
  },
})
