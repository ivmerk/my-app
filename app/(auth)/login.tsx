import React, { useState } from 'react';
import LoginForm from '@/components/login-form/login-form';
import {LoginScreenMode} from '@/constants/const';
import Logo from '@/components/logo/logo';
import { View, Text, Pressable } from 'react-native';
import RegisterForm from '@/components/register-form/register-form';

export default function LoginScreen  () {
  const [screen, setScreen] = useState(LoginScreenMode.LOGIN);
  return (
    <View>
      <View>
        <Logo/>
        <Text>HANTIFY</Text>
        <Pressable onPress={() => setScreen(LoginScreenMode.LOGIN)}>
          <Text>Вход</Text>
        </Pressable>
        <Pressable onPress={() => setScreen(LoginScreenMode.REGISTER)}>
          <Text>Регистрация</Text>
        </Pressable>
      </View>
      {screen === LoginScreenMode.LOGIN ? <LoginForm/> : <RegisterForm/>}
    </View>);
};

