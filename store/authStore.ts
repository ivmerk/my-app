import * as SecureStore from 'expo-secure-store';
import { createStore, create } from 'zustand';

type AuthState= {
  user: string | null;
  token: string | null;
};

type AuthAction = {
  login: (user: string, token: string) => Promise<void>;
  logout: () => Promise<void>;
  loadToken: () => Promise<void>;
};
const useAuthStore = create<AuthState & AuthAction>((set) => ({
  user: null,  // Данные пользователя (если null — пользователь не авторизован)
  token: null, // Токен аутентификации
  // Метод для логина
  login: async(user: string, token : string) => 
  {
    await SecureStore.setItemAsync('userToken', token);
    set({  user, token });
  },
  // Метод для логаута
  logout:async () => 
  {
    await SecureStore.deleteItemAsync('userToken');
    set({ user: null, token: null });
  },
  loadToken: async () => 
  {
    const token = await SecureStore.getItemAsync('userToken');
    if (token) {
      set({ token });
    }
  }
}));

export default useAuthStore;
