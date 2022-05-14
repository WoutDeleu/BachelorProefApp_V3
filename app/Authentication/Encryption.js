import SECRET_KEY from "./SECRET_KEY";
const CryptoJS = require("crypto-js");

export const encrypt = (password) => {
    const key = CryptoJS.enc.Base64.parse(SECRET_KEY);
    const srcs = CryptoJS.enc.Utf8.parse(password);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
}

export const decrypt = (password) => {
    const key = CryptoJS.enc.Base64.parse(SECRET_KEY);
    const decrypt = CryptoJS.AES.decrypt(password, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    console.log(CryptoJS.enc.Utf8.stringify(decrypt).toString());
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
