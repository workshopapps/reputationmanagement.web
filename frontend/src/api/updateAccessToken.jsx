import Api from "./axios";
import CryptoJS from "crypto-js";

const useAccessToken = () => {
    const refresh = async () => {
        const response = await Api.get('/refresh', {
            withCredentials: true
        })
       const encryptedToken = (CryptoJS.AES.encrypt(JSON.stringify(response?.data?.accessToken), 'AccessToken'));
       localStorage.setItem('accessToken' ,encryptedToken)
       return 'accessToken reset!!'
    }
    return refresh;
}
export default useAccessToken;