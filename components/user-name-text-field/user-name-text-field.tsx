import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function UserNameTextField({ username, setUsername } : {username: string, setUsername: (username: string) => void}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Usssername"
        value={username}
        onChangeText={setUsername}
      />
    </View>
  );
}
 const styles = StyleSheet.create({
   container: {
     width: '100%',
    marginTop: 20,
    borderWidth: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
