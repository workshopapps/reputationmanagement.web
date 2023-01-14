import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Api from "../../api/axios";
import GOOGLE from '../../assets/images/img/google.svg';

const GoogleLogin = (props) => {
    const router = useNavigate();
    const location = useLocation();
    const currentRoute = location.pathname
    console.log(currentRoute)

    const registerAccessToken = async(token) => {
        try{
            const response = await Api.post('/api/auth/externallogin', {
                provider: 'Google',
                idToken: token,
                // {currentRoute === '/signup' && businessName : businessName,}
            })
            console.log(response)
        }
        catch(err){
            console.log(err)
        }
    }
    const handleGoogleLogin = useGoogleLogin({
		onSuccess: (response) => {
            registerAccessToken(response?.access_token)
			console.log(response)
			localStorage.setItem('auth', 'mail')
			localStorage.setItem('user_type', 'business')
			Cookies.set('reputeAccessToken', response?.access_token)
			router('/dashboard')
			toast.success( currentRoute === '/signup' ? 'Signup successful' : 'Login successful')
		},
		onError: err => console.log(err),
	});
    return(
        <StyledGoogleButton className='google' onClick={() => handleGoogleLogin()} >
            <img src={GOOGLE} alt=""/>
            Google
        </StyledGoogleButton>
    )
}
const StyledGoogleButton = styled.button`
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 1px solid #D2D3D4 !important;
    width: 400px;
    margin: 0 auto;
    max-width: 100%;
    border-radius: 7px !important;
    cursor: pointer;
    height: 59px;
    margin-top: 40px;
    box-shadow: none !important;
    opacity: 1 !important;
`
export default GoogleLogin;