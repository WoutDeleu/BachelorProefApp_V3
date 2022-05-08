import * as SecureStore from "expo-secure-store";

const getFromStore = async (key) => {
    try {
        console.log(key)
        let obj = await SecureStore.getItemAsync(key);
        return obj;
    } catch (e) {
        console.log(e.message);
    }
}
export default getFromStore;