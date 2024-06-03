import AsyncStorage from "@react-native-async-storage/async-storage";

export const GuardarSesion = async (value:string) => {
  try {
    await AsyncStorage.setItem("@user_token", value);
  } catch (e) {
    // saving error
    console.error(e);
  }
};

export const ObtenerSesion = async () => {
  try {
    const value = await AsyncStorage.getItem("@user_token");
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
    console.error(e);
  }
};

export const SerrarSesion = async () => {
  try {
    await AsyncStorage.removeItem("@user_token");
  } catch (e) {
    // error removing value
    console.error(e);
  }
};
