import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUserData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : [];
  } catch (error) {
    console.log(error);
  }
};
