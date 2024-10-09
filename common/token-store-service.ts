import * as SecureStore from 'expo-secure-store';

export async function getToken(key: string) {
  const token = await SecureStore.getItemAsync(key);
  return token;
}

export async function setToken(key: string, token: string) {
  await SecureStore.setItemAsync(key, token);
}

export async function removeToken(key: string) {
  await SecureStore.deleteItemAsync(key);
}
