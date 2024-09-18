import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAuth } from '@/context/AuthProvider';
import { PROXY_URL } from '@/constants/const.card';
import {jwtDecode} from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';

export default function LoginScreen  () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

