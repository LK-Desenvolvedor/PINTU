// src/service/auth.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@auth_token';
const EXPIRATION_KEY = '@token_expiration';

export const storeToken = async (token, expirationHours = 5) => {
  try {
    const now = new Date();
    const expirationTime = now.getTime() + expirationHours * 60 * 60 * 1000;
    await AsyncStorage.setItem(TOKEN_KEY, token);
    await AsyncStorage.setItem(EXPIRATION_KEY, expirationTime.toString());
  } catch (error) {
    console.error('Erro ao armazenar token:', error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    const expirationTime = await AsyncStorage.getItem(EXPIRATION_KEY);

    if (token && expirationTime) {
      const now = new Date();
      if (now.getTime() < parseInt(expirationTime, 10)) {
        return token;
      } else {
        await removeToken();
        return null;
      }
    }
    return null;
  } catch (error) {
    console.error('Erro ao obter token:', error);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
    await AsyncStorage.removeItem(EXPIRATION_KEY);
  } catch (error) {
    console.error('Erro ao remover token:', error);
  }
};
