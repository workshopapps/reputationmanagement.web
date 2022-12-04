import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import bg_img from '../../assets/images/woman_on_phone.png'
import repute_logo from '../../assets/images/repute_logo.png'
import arrow_left from '../../assets/images/password_arrow_left.png'
import authentication_icon from '../../assets/images/authenticate_img.png'


export default function PasswordRecovery() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("")

   function handleChange(event){
        setEmail(event.target.value);
   }
    function handleSubmit(event){
        event.preventDefault();
        navigate('/password-recovery/change')
    }
  return (
        <StyledParent>
            <StyledSection onSubmit={handleSubmit}>
                
                <StyledLogo src={repute_logo} alt="repute logo"/>
                <div>
                    <Link to="/login">
                        <StyledIcon src={arrow_left} alt="arrow_left_icon" />
                    </Link>
                    <StyledHeader>Forgot Password?</StyledHeader>
                </div>
                
                <StyledAuth src={authentication_icon} alt="authentication icon" />
                <StyledParagraph>Please enter the email address you used when you joined and we’ll send you instructions to reset your password.</StyledParagraph>

                <StyledForm>
                    <label htmlFor="email">Email</label>
                    <StyledInput 
                    type="email" 
                    placeholder="Marksons@gmail.com" 
                    required 
                    onChange={handleChange}
                    value={email}/>

                    <StyledSubmit type="submit">Sign in</StyledSubmit>
                </StyledForm>
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
max-width: 600px;
margin: 50px auto;

    div {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;

        @media (max-width: 500px){
            flex-direction: row;
            margin-bottom: 40px;

        }
    }

    @media (max-width: 500px) {
        margin: 5px auto;
    }
`
const StyledLogo = styled.img`
    margin: 0 auto;
    margin-bottom: 60px;

    @media (max-width: 500px){
            display: none;

        }
`
const StyledAuth = styled.img`
    display: none;

    @media (max-width: 500px){
        display: block;
        width: 150px;
        height: 150px;
        margin: 0 auto 20px;
    }
`

const StyledIcon = styled.img`
    display: none;

    &:hover {
            border: 1px solid #F16F04;
            cursor: pointer;
        }

    @media (max-width: 500px){
        display: inline-block;
        border-radius: 50%;
        border: 1px solid #BCBDBE;
        width: 40px;
        height: 40px;
        margin-left: 30px;
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
        width: 80%;
        margin: 0 auto 40px;
    }
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
padding: 0 10px;

    label {
        @media (max-width: 500px){
            width: 80%;
            margin: 0 auto;
        }
    }

    @media (max-width: 500px) {
        margin-bottom: 50px;
    }
`

const StyledInput = styled.input`
background: #FFFFFF;
border: 1px solid #E8E8E8;
border-radius: 8px;
padding: 8px 20px;
margin-top: 15px;

&:focus {
    outline: 1px solid #233ba9;
}

@media (max-width: 500px){
    width: 80%;
    margin: 0 auto;
}
`

const StyledSubmit = styled.button`
background-color: #233ba9;
width: 100%;
margin-top: 60px;
padding: 10px 20px;
color: #fff;
border-radius: 15px;
text-align: center;

    @media (max-width: 500px){
        width: 80%;
        margin: 60px auto 0;
    }
`