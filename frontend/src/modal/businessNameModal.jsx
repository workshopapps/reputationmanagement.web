import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Api from "../api/axios";
import GOOGLE from '../assets/images/img/google.svg';
import ErrorMessage from "../components/error message/errorMessage";

const BusinessNameModal = (props) => {
    const setBusinessName = props.setBusinessName
    const ref = props.reference
    const [ triedToSubmit, setTriedTosubmit] = useState(false);

    const router = useNavigate();

    const handleSubmit = () => {
        props.businessName
            ? 
            handleGoogleLogin()
            :
            setTriedTosubmit(true)
    }

    const registerAccessToken = async(token) => {
        try{
            const response = await Api.post('/api/auth/externallogin', {
                provider: 'Google',
                idToken: token,
                businessName : props.businessName,
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
			toast.success('Signup successful')
		},
		onError: err => console.log(err),
	});
    console.log(ref)
    return(
        <StyledOverlay>
            <div className="name-modal" ref={ref}>
            <h2>Welcome To Repute</h2>
                <h4>Enter your business name to continue</h4>
                <input
                    type="email"
                    placeholder="DavidStores.ng"
                    value={props.businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                />
                {triedToSubmit && !props.businessName && <ErrorMessage error="Enter your businesss name"/>}
                <button className='google' onClick={() => handleSubmit()}>
                    <img src={GOOGLE} alt=""/>
                    Google
                </button>
            </div>
        </StyledOverlay>
    )
}

const StyledOverlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        font-family: Lato;
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
        color: #4D5154;
    }
    .google{
        max-width: 80%;
		display: flex !important;
		align-items: center;
		justify-content: center;
		gap: 20px;
		border: 1px solid #D2D3D4 !important;
		width: 400px;
		margin: 0 auto;
		border-radius: 7px !important;
		cursor: pointer;
		height: 59px;
		margin-top: 40px;
		box-shadow: none !important;
		opacity: 1 !important;
    }
    input{
        width: 80%;
        height: 54px;
        border: 1px solid #020304;
        margin-top: 30px;
        border-radius: 5px;
        padding-left: 10px;
    }
    h4{
        font-family: Lato;
        font-size: 18px;
        font-weight: 300;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
        color: #4D5154;
    }
    .name-modal{
        background-color: #ffffff;
        width: 400px;
        height: 400px;
        display: flex;
        border-radius: 10px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`
export default BusinessNameModal;