import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import useAuthStore from '../../store/authStore';

export const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const login= useAuthStore((state: any) => state.login);

  const handleLogin = () => {
    // Имитация логина
    const fetchedUser = { name: username };
    const fetchedToken = 'token123'; // Пример токена
    login(fetchedUser, fetchedToken);
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

