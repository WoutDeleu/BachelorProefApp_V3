import * as SecureStore from "expo-secure-store";


async function save(key, value) {
    try {
        await SecureStore.setItemAsync(key, value);
        //console.log("done");
    }
    catch (e) {
        console.log(e.message);
    }
}

export default save;