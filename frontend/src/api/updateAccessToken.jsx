import { useEffect } from "react";
import useAuthContext from "../hooks/useAuthContext";
import Api from "./axios";

const updateAccessToken = () => {
    const { setAuth } = useAuthContext();

    useEffect(() => {
        const requestNewToken = async() => {
            try{
                const response = await Api.get('/auth/access_token',{
                    withCredentials: true,
                })
            }
            catch(err){
                console.error(err)
            }
        }
    })
    return(
        <h1>Hello</h1>
    )
}
export default updateAccessToken;