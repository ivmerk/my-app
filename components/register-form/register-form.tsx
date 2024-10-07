import React, { useState }  from 'react';
import { View, TouchableOpacity,Text, StyleSheet, Dimensions } from 'react-native';
import UserNameTextField from '../user-name-text-field/user-name-text-field';
import PasswordTextField from '../password-text-field/password-text-field';
import { useAuth } from '@/context/AuthProvider';
import { PROXY_URL } from '@/constants/const.card';
import { jwtDecode } from 'jwt-decode';

const {width} = Dimensions.get('window');

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {setUser} = useAuth();

  const handleRegister =async () => {
    try {
      const response = await fetch(`${PROXY_URL}https://identity.hantify.ru/api/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://localhost',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify({ 
          login: username, password: password }),
      });
      console.log('Server response:', response);
      if (!response.ok) {
      const errorResponse = await response.text(); // Логируем ответ с сервера
      console.log('Response error:', errorResponse);
      throw new Error('Failed to login');
      }
      const data = await response.json();
      const {accessToken, refreshToken } = data;
      const jwtPayload: JwtPayload = jwtDecode(accessToken);
      console.log('JWT payload:', jwtPayload);

      const userKey = Object.keys(jwtPayload).find((key => key.endsWith('name')));
console.log(userKey);

      if (!userKey ) {
        throw new Error('Failed to get user name');
      }
      setUser({name:jwtPayload[userKey]});
      console.log({name:jwtPayload[userKey]});
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <UserNameTextField username={username} setUsername={setUsername}/>
      <PasswordTextField placeholder="ПАРОЛЬ" password={password} setPassword={setPassword} />
      <PasswordTextField placeholder="ПАРОЛЬ ЕЩЕ РАЗ" password={confirmPassword} setPassword={setConfirmPassword} />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
