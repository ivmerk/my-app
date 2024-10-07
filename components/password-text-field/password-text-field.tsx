import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function PasswordTextField({ placeholder, password, setPassword } 
  : {placeholder: string, password: string, setPassword: (password: string) => void}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{placeholder}</Text>
      <View  style={styles.testContainer}>
        <TextInput
          style={{width: '100%'}}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  label: {
    paddingLeft: 4,
    marginTop: 2,
    fontSize: 8,
    color: 'grey',
  },
  testContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  }
});
