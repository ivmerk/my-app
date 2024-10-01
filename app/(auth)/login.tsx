import React, { useState } from 'react';
import LoginForm from '@/components/login-form/login-form';
import {LoginScreenMode} from '@/constants/const';
import Logo from '@/components/logo/logo';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import RegisterForm from '@/components/register-form/register-form';
import { LogoAndBrandname } from '@/components/svg-const/svg-const';


const {width} = Dimensions.get('window');

export default function LoginScreen  () {
  const [screen, setScreen] = useState(LoginScreenMode.LOGIN);
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
          <LogoAndBrandname/>
        </View>
        <View style={styles.menuContainer}>
          <Pressable onPress={() => setScreen(LoginScreenMode.LOGIN)}>
            <Text style={screen === LoginScreenMode.LOGIN ? styles.menuTextActive : styles.menuText}>Вход</Text>
          </Pressable>
          <Pressable onPress={() => setScreen(LoginScreenMode.REGISTER)}>
            <Text style={screen === LoginScreenMode.REGISTER ? styles.menuTextActive : styles.menuText}>Регистрация</Text>
          </Pressable>
        </View>
      {screen === LoginScreenMode.LOGIN ? <LoginForm/> : <RegisterForm/>}
    </View>);
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    flex: 1,
    width,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  headerContainer: {
    flexDirection: 'row',
    width,
    justifyContent: 'center',
  },
  headerText: {
  },
  menuContainer: {
flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 5,

    borderBottomWidth: 1,
    borderStyle: 'dotted',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'regular',
    paddingLeft: 10,
  },
  menuTextActive: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingLeft: 10,
  }
});
