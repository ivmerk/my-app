import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function UserNameTextField({ username, setUsername } 
  : {username: string, setUsername: (username: string) => void}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>НОМЕР ТЕЛЕФОНА</Text>
      <View  style={styles.textContainer}>
        <Text>+</Text>
      <TextInput
        style={{width: '100%'}}
        value={username}
        onChangeText={setUsername}
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
    marginLeft: 4,
    marginTop: 2,
    fontSize: 8,
    color: 'grey',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
     justifyContent: 'center',
    paddingLeft: 5,
  }
 });
