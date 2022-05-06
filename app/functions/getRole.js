import * as SecureStore from "expo-secure-store";

const getRole = async () => {
    try {
        // console.log("function getToken");
        let role = await SecureStore.getItemAsync('role');
        // console.log("done");
        return role;
    } catch (e) {
        console.log(e.message);
    }
}
export default getRole;