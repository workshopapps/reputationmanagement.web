import React from 'react'
import styled from 'styled-components'
import { FaRegEyeSlash } from 'react-icons/fa';
import ResetSuccess from '../../modal/resetpasswordsuccess/resetpasswordsuccessful'
import bg_img from '../../assets/images/woman_on_phone.png'
import repute_logo from '../../assets/images/repute_logo.png'
import { Link } from "react-router-dom"


export default function ChangePassword() {
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [passwordShown, setPasswordShown] = React.useState(false)
    const [confirmPasswordShown, setConfirmPasswordShown] = React.useState(false)
    const [resetPasswordModal, setResetPasswordModal] = React.useState(false)
    const [showPasswordModal, setShowPasswordModal] = React.useState(false)

    function togglePassword(event){
        event.preventDefault();
        setPasswordShown((prevState)=> !prevState);
    }

    function toggleConfirmPassword(event){
        event.preventDefault();
        setConfirmPasswordShown((prevState) => !prevState);
    }

    function handleChange(event) {
        setPassword(event.target.value)
    }

    function handleConfirm(event){
        setConfirmPassword(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        if(password === confirmPassword){
            setShowPasswordModal(true);
            setResetPasswordModal(true);
            // navigate('/')
        }
        else {
            setShowPasswordModal(true);
            setResetPasswordModal(false);
        }
    }

  return (
    <StyledParent>
        <StyledSection onSubmit={handleSubmit}>
            <StyledLogo src={repute_logo} alt="repute logo"/>
            <StyledHeader>Reset Password</StyledHeader>
            <StyledParagraph>Please enter and confirm your new password</StyledParagraph>

            <StyledForm style = {{opacity: showPasswordModal ? 0.4 : 1}}>
                <label htmlFor="password">Password</label>
                <StyledFormInput>
                    <StyledInput 
                    type={passwordShown? "text" : "password"} 
                    placeholder="" 
                    required 
                    onChange={handleChange}
                    value={password}/>
                    <button onClick={togglePassword}>
                        <FaRegEyeSlash />
                    </button>
                </StyledFormInput>
                

                <label htmlFor="password">Confirm password</label>
                <StyledFormInput>
                    <StyledInput 
                    type={confirmPasswordShown ? "text" : "password"}
                    placeholder="" 
                    required 
                    onChange={handleConfirm}
                    value={confirmPassword}/>
                    <button onClick={toggleConfirmPassword}>
                        <FaRegEyeSlash />
                    </button>
                </StyledFormInput>

                <StyledSubmit type="submit">Sign in</StyledSubmit>
            </StyledForm>
            <StyledModal>
                {showPasswordModal && <ResetSuccess resetPasswordModal={resetPasswordModal} />}
            </StyledModal>
            
        </StyledSection>
        <StyledDiv>
                <StyledImg src={bg_img} className='background' alt="woman on the phone calling"  />
                <StyledImgText>Welcome back, <span><Link to="/blog">click here</Link></span> to check out our new updates</StyledImgText>
        </StyledDiv>
    </StyledParent>        
  )
}

const StyledParent = styled.div`
    display: flex;
`

const StyledSection = styled.section`
position: relative;
width: 90%;
max-width: 600px;
margin: 50px auto;

    @media (max-width: 500px) {
        margin: 5px auto;
    }
`

const StyledDiv = styled.div`
    width: 40%;   
    height: 100vh;
    position: relative;

    @media (max-width: 600px){
        display: none;
    }
`

const StyledLogo = styled.img`
    margin: 0 auto;
    margin-bottom: 60px;

    @media (max-width: 500px){
            margin-top: 60px;
        }
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`

const StyledImgText = styled.p`
    position: absolute;
    bottom: 9%;
    background: linear-gradient(180deg, rgba(245, 245, 245, 0.1764) -22.33%, rgba(245, 245, 245, 0.1904) 77.67%);
    mix-blend-mode: normal;
    border: 0.85625px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 3.425px 20.55px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(12.8438px);
    border-radius: 34.25px;
    padding: 50px;
    width: 60%;
    left: 50%;
    transform: translate(-50%, 0);
    color: #fff;

    span{
        color: #F16F04;
        
        &:hover {
            cursor: pointer;
        }
    }
`
const StyledHeader = styled.h1`
text-align: center;
color: #2B2C34;
font-size: 40px;
font-weight: 700;
padding: 5px;

@media (max-width: 500px) {
        margin-top: 5px;
        font-size: 24px;
    }
`

const StyledParagraph = styled.p`
font-weight: 400;
text-align: center;
font-size: 16px;
margin-bottom: 40px;

    @media (max-width: 500px){
        font-size: 15px;
        width: 90%;
        margin: 0 auto 40px;
    }
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
padding: 0px 10px;
/* {showPasswordModal && opacity: 0.5}; */

@media (max-width: 500px) {
        margin-bottom: 50px;
    }
`

const StyledFormInput = styled.form`
    display: flex;
    flex-direction: column;
    position: relative;

    button {
        position: absolute;
        top: 30px;
        right: 10px;
    }
`

const StyledModal = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 80%;
`

const StyledInput = styled.input`
background: #FFFFFF;
border: 1px solid #E8E8E8;
border-radius: 8px;
padding: 8px 20px;
margin-top: 15px;
margin-bottom: 20px;

&:focus {
    outline: 1px solid #233ba9;
}
`

const StyledSubmit = styled.button`
background-color: #233ba9;
width: 100%;
margin-top: 20px;
padding: 10px 20px;
color: #fff;
border-radius: 15px;
text-align: center;
`