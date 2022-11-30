import Api from "./axios";
import Cookies from "js-cookie";

const useAccessToken = () => {
    const refresh = async () => {
        const response = await Api.get('/refresh', {
            withCredentials: true
        })
       Cookies.set('repboostAccessToken', response?.data?.accessToken)
       return 'accessToken reset!!'
    }
    return refresh;
}
export default useAccessToken;