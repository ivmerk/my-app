import React from 'react';
import { View, TextInput, Text } from 'react-native';

export default function PasswordTextField({ password, setPassword } : {password: string, setPassword: (password: string) => void}) {
  return (
    <View>
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
    </View>
  );
}
