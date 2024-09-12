import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAuth } from '@/context/AuthProvider';
import { PROXY_URL } from '@/constants/const.card';

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
      console.log(data);
      setUser(data.user);
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

