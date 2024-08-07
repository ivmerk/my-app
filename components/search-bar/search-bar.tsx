import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";


export default function SearchBar() {
const [inputText, setInputText] = useState('');
  return (
      <Pressable style={styles.container} onPress={() => {console.log('pressed');
      router.push('/search')}}>
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
      </Pressable>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%',
    marginLeft: '5%',
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
