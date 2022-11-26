import { useEffect } from "react"
import CryptoJS from "crypto-js";
import { ApiPrivate } from "../api/axios";
// import useAccessToken from "../api/updateAccessToken";


const useAxiosPrivate = () => {
    const accessToken = localStorage.getItem('accessToken')
    const decryptedToken = (CryptoJS.AES.decrypt(JSON.stringify(accessToken), 'AccessToken'));
    // const resetAccessToken = useAccessToken();

    useEffect(() => {
        const requestInterceptor = ApiPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${decryptedToken}`
                }
                return config
            },(error) => Promise.reject(error)
        )
        // const responseInterceptor = ApiPrivate.interceptors.use(
        //     response => response,
        //     async (error) => {
        //         const prevReq = error.config
        //         if ( error?.response?.status === 403 && !prevReq.sent){
        //             prevReq.sent = true
        //             const response = await resetAccessToken();
        //             console.log(response)
        //             prevReq.headers['Authorization'] = `Bearer ${decryptedToken}`
        //             return ApiPrivate(prevReq)
        //         }
        //         return Promise.reject(error)
        //     }
        // )
        return () => {
            ApiPrivate.interceptors.request.eject(requestInterceptor)
            // ApiPrivate.interceptors.response.eject(responseInterceptor)
        }
    },[ decryptedToken, ])
    return ApiPrivate
}
export default useAxiosPrivate;