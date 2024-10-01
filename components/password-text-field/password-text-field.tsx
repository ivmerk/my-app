import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function PasswordTextField({ placeholder, password, setPassword } : {placeholder: string, password: string, setPassword: (password: string) => void}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
