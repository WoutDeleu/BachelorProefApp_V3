import * as SecureStore from "expo-secure-store";
import reloadApp from "./reloadApp";

async function logOut() {
    try {
        await SecureStore.deleteItemAsync("access_token");
        await SecureStore.deleteItemAsync("refresh_token");
        await SecureStore.deleteItemAsync("access_token_expired");
        await SecureStore.deleteItemAsync("refresh_token_expired");
        await SecureStore.deleteItemAsync("role");
        await SecureStore.deleteItemAsync("ownId");
        await SecureStore.deleteItemAsync("userInfo")
        console.log("Uitgelogd");
        await reloadApp();

    } catch (e) {
        console.log(e.message);
    }
}

export default logOut;