import * as SecureStore from "expo-secure-store";
import axios from "axios";
import backendURL from "../backendURL";

const refreshToken = async () => {
    const t = await SecureStore.getItemAsync("access_token")
    const time = await SecureStore.getItemAsync("access_token_expired")

    let expTime_at = await SecureStore.getItemAsync('access_token_expired');
    let expTime_rt = await SecureStore.getItemAsync('refresh_token_expired');
    let curTime = new Date().getTime();
    const url_refresh = backendURL + "/authentication/token/refresh";

    if(expTime_at>curTime) { }
    else {
        if(expTime_rt>curTime) {
            let config = {
                method: 'get',
                url: url_refresh,
                headers:{
                    'Authorization': 'Bearer ' + JSON.parse(await SecureStore.getItemAsync("refresh_token"))
                }
            }
            axios(config).then(function(res){
                SecureStore.setItemAsync("access_token", JSON.stringify(res.data.access_token));
                let time = new Date().getTime();//getTime gives the amount of millieseconds that have passed since January 1st 1970
                let access_token_expired = new Date(time + 10*60*1000).getTime();
                SecureStore.setItemAsync("access_token_expired", JSON.stringify(access_token_expired));
                // console.log(res.data.access_token)
            }).catch(function (error) {
            });
        }
    }
}

export default refreshToken;