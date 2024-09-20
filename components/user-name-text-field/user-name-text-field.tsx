import React from 'react';
import { View, TextInput, Text } from 'react-native';

export default function UserNameTextField({ username, setUsername } : {username: string, setUsername: (username: string) => void}) {
  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
    </View>
  );
}
