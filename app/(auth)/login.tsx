import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAuth } from '@/context/AuthProvider';

export default function LoginScreen  () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useAuth();

  const handleLogin = () => {
    // Имитация логина
    const fetchedUser = { name: username };
    const fetchedToken = 'token123'; // Пример токена
    setUser(fetchedUser);
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

