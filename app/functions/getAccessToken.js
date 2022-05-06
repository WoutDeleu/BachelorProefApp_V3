import * as SecureStore from "expo-secure-store";

const getAccessToken = async () => {
    try {
        // console.log("function getToken");
        let token = await SecureStore.getItemAsync('access_token');
        // console.log("done");
        return token;
    } catch (e) {
        console.log(e.message);
    }
}
export default getAccessToken;