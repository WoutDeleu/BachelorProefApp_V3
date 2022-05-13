import SECRET_KEY from "./SECRET_KEY";
const CryptoJS = require("crypto-js");

export const encrypt = (password) => {
    return CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
}

export const decrypt = (password) => {
    return CryptoJS.AES.decrypt(password, SECRET_KEY).toString(CryptoJS.enc.Utf8);
}