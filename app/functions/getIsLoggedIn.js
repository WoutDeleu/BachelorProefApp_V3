import * as SecureStore from "expo-secure-store";

const getIsLoggedIn = async () => {
    try {
        // console.log("function getToken");
        let bool = await SecureStore.getItemAsync('isLoggedIn');
        // console.log("done");
        return bool;
    } catch (e) {
        console.log(e.message);
    }
}
export default getIsLoggedIn;