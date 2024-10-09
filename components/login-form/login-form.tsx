import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '@/context/AuthProvider';
import { PROXY_URL } from '@/constants/const.card';
import {jwtDecode} from 'jwt-decode';
import PasswordTextField from '../password-text-field/password-text-field';
import UserNameTextField from '../user-name-text-field/user-name-text-field';
import { setToken } from '@/common/token-store-service';

const {width} = Dimensions.get('window');
export default function LoginForm  () {
  const [username, setUsername] = useState('79206907175');
  const [password, setPassword] = useState('79206907175');

  const {setUser} = useAuth();

  const handleLogin =async () => {
    try {
      const response = await fetch(`${PROXY_URL}https://identity.hantify.ru/api/login`, {
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
      const {accessToken, refreshToken, idToken} = data;
      console.log('Access token:', accessToken);
      setToken('access_token', accessToken);
      setToken('refresh_token', refreshToken);
      setToken('id_token', idToken);
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
      <UserNameTextField username={username} setUsername={setUsername} />
      <PasswordTextField placeholder="ПАРОЛЬ" password={password} setPassword={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
