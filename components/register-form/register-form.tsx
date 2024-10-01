import React, { useState }  from 'react';
import { View, TouchableOpacity,Text, StyleSheet, Dimensions } from 'react-native';
import UserNameTextField from '../user-name-text-field/user-name-text-field';
import PasswordTextField from '../password-text-field/password-text-field';

const {width} = Dimensions.get('window');

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={styles.container}>
      <UserNameTextField username={username} setUsername={setUsername}/>
      <PasswordTextField placeholder="ПАРОЛЬ" password={password} setPassword={setPassword} />
      <PasswordTextField placeholder="ПОВТОРИТЕ ПАРОЛЬ" password={confirmPassword} setPassword={setConfirmPassword} />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 40,
    width,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width:'100%',
    backgroundColor: '#484848',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
