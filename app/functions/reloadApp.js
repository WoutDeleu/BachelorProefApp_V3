import * as Updates from "expo-updates";

const  reloadApp = async () => {
    await Updates.reloadAsync();
}

export default reloadApp;