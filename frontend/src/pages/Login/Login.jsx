//import React from 'react'
//import image from '../../src/Sign-up/Assets/background.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apple from '../Sign-up/Assets/apple-icon.svg';
import facebook from '../Sign-up/Assets/facebook-icon.svg';
import google from '../Sign-up/Assets/google-icon.svg';
import img1 from '../Sign-up/Assets/loginBG.svg';
import styled from "styled-components";
import { FaRegEyeSlash } from 'react-icons/fa';
import Api from '../../api/axios';
import ErrorMessage from '../../components/error message/errorMessage';
import { useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext'
import fixit_logo from '../Sign-up/Assets/Logo(1).png'
import Cookies from 'js-cookie';


const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const router = useNavigate();
  // Password toggle handler
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ requestPending, setRequestPending ] = useState(false)

  const [ triedToSubmit, setTriedToSubmit ] = useState(false)
  const [ pageValid, setPageValid ] = useState(false)

  useEffect(() => {
    email !== '' && password.length >= 8 ? setPageValid(true) : setPageValid(false)
  },[ email, password ])
  const { setRequestFailed, setRequestSuccess, setErrMessage, setSuccessMessage} = useAppContext();
  const [ retainAuth, setRetainAuth ] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    setTriedToSubmit(true)
    if(pageValid){
      setRequestPending(true)
      try{
        const response = await Api.post('/auth/sign_in',
          {
            email: email,
            password: password,
          }
        )
        localStorage.setItem('auth',email)
        Cookies.set('repboostAccessToken', response?.data?.accessToken)
        console.log(response?.data)
        setRequestPending(false)
        router('/dashboard')
        setSuccessMessage('Login successful')
        setRequestSuccess(true)
      }
      catch(err) {
        setErrMessage('Login failed');
        setRequestFailed(true)
        console.log(err)
        setRequestPending(false)
      }
    }
  }
  return (
    <ParentContainer style={{ maxWidth: '1540px', margin: '0 auto', display: 'flex'}}>
      <FormSection>
        <ImgSectionSm>
          <img src={fixit_logo} alt=""/>
        </ImgSectionSm>
        <StyledForm>
          <StyledHead1 onClick={() => setRequestFailed(true)}>
              Welcome Back
          </StyledHead1>

          <SubHead>
            Log in to continue
          </SubHead>

          <Input1 className='text-input'>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@gmail.com" id="email" required 
                className={email === '' && triedToSubmit ? 'invalid' : ''}
              />
              {email === '' && triedToSubmit && <ErrorMessage error='Enter Your Email'/>}
            </Input1>

          <Input2 className='text-input'>
              <label htmlFor="email">Password</label>
              <div className={ password < 8 && triedToSubmit ? 'invalid input2-div' : 'input2-div'}>
              <input 
                type={ passwordShown ? "text" : "password" }
                name="password" 
                value={password} 
                placeholder="6+ character long" id="email" required 
                onChange={(e) => setPassword(e.target.value)}
              />

              <button onClick={() => togglePassword()} type="button">
                <FaRegEyeSlash/>
              </button>
              </div>
              { password.length < 8 && triedToSubmit && <ErrorMessage error={ password ==='' ? 'Enter your password' : 'Password Must Be A Minimum Of 8 Characters'}/>}
            </Input2>

            <Remember>
                <div className='slide-radio-main'>
                <SlideRadio className={ retainAuth ? 'retain' : ''} onClick={() => setRetainAuth(!retainAuth)}>
                  <div></div>
                </SlideRadio>
                  Keep me Signed in
                </div>

              <ForgotPass>
                <Link className=''>forgot password</Link>
                </ForgotPass>
              </Remember>

              <SubmitBtn onClick={(e) => handleSubmit(e)}>
              {
                !requestPending
                    ?
                    "Log In"
                :
                <div className="loading"></div>
              }
              </SubmitBtn>
          
        </StyledForm>

        <Loginwith>
          <span></span>
          <h4>or log in with</h4>
          <span></span>
        </Loginwith>

        <FormFooter>
          <div className='form-footer-icon'>
            <img src={google} alt="google"/>
            <img src={apple} alt="apple"/>
            <img src={facebook} alt="facebook"/>
          </div>

          <div className='footer-text'>Don't have an account? <span onClick={() => router('/signup')} style={{ cursor: 'pointer'}} >Sign up</span></div>
        </FormFooter>

      </FormSection>

      <ImgSection>
          <img src={fixit_logo} alt=""/>
      </ImgSection>

    </ParentContainer>
  )
}

export default Login



const ImgSectionSm = styled.div`
  @media(min-width: 901px){
    display: none;
  }
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  max-width: 60%;
  img{
    width: 100%;
  }
`;
const ParentContainer = styled.div`
   height: 100vh;
   display: flex;
   background-size:cover;
   background-position: left top;
   background-repeat: no-repeat;
   background-position-x: left;
   background-image: url(${img1});
   @media (min-width:2000px) {
    width: 100%;
     justify-content: center;
     align-items: center;
   }
  
.footer-text{
    font-family: Lato;
    font-size: 24px !important;
    font-weight: 400 !important;
    line-height: 29px;
    -webkit-letter-spacing: 0.01em;
    -moz-letter-spacing: 0.01em;
    -ms-letter-spacing: 0.01em;
    letter-spacing: 0.01em;
    text-align: left;
    color: #6F7174;
    margin-top: 4px;
    span{
      color: blue;
      text-decoration: underline;
    }
}
`;
const ImgSection = styled.div`
 width: 50%;
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-end;
   @media (max-width:900px) {
      display: none;
   }

`;
const FormSection = styled.section`
  width: 50%;
  height: 100%;
  padding-top: 104px;
  padding-bottom: 40px;
  overflow-x: scroll;
  background-color: #ffffff;
   padding-left: 62px;
   padding-right: 79px;
   @media (max-width:900px) {
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
  }

`;
const StyledForm = styled.form`
  

`;

const StyledHead1 = styled.h1`
    font-size: 57px;
    font-weight: 700px;

    @media screen and (min-width: 768px) and (max-width:1000px) {
      font-size: 47px;
    
   }

    @media (max-width:520px) {
      font-size: 37px;
   }

`;

const SubHead = styled.h5`
    font-size: 24px;
    font-weight: 400;
   color:#6F7174;

`;

const Input1 = styled.div`
   margin-top: 40px;
   display: flex;
   flex-direction: column;

   label {
    margin-bottom: 8px;
   }

   input {
   border: 1px solid #D2D3D4;
   border-radius: 8px;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;
   
   }

`;

const Input2 = styled.div`
    margin-top: 20px;

   label {
    margin-bottom: 8px;
   }

   .input2-div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
   border: 1px solid #D2D3D4;
   border-radius: 8px;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;
   }
      button {
        position: absolute;
        right: 10px;
        font-size: 25px;

        &:hover {
          cursor: pointer;
        }
      }
   }

`;

const Remember = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .slide-radio-main {
      display: flex;
      align-items: center;
    }
    @media(max-width: 400px){
      flex-direction: column;
    }
    .retain{
      border: 1px solid #000000 !important;
      transition: all ease-in-out 0.5s;
      div{
        background-color: #000000 !important;
        right: 0 !important;
        transition: all ease-in-out 0.5s;
      }
    }
`;

const SlideRadio = styled.div`
margin-right: 5px;
position: relative;
width: 32px;
height: 17px;
border-radius: 11px;
border: 1px solid #E8E8E8;
display: flex;
align-items: center;
transition: all ease-in-out 0.5s;

   &:hover {
    cursor: pointer;
   }
   div {
    position: absolute;
    height: 11px;
    width: 11px;
    background-color: #E8E8E8;
    border-radius: 50%;
    transition: all ease-in-out 0.5s;
   }

`;

const ForgotPass = styled.div`
  color: #F16F04;
  font-size: 14px;
  font-weight: 700;

`;

const SubmitBtn = styled.button`
margin-top: 20px;
  width: 100%;
  height: 59px;
  border-radius: 7px;
  background-color: #233BA9;
  color: white;
  .loading{
    width: 20px;
    height: 20px;
    border: 2px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
  }
`;

const Loginwith = styled.div`
margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18.75px;
  white-space: nowrap;
   span {
    height: 2px;
    width: 100px;
    background-color: #98A2B3;

    @media (max-width:520px) {
      width: 60px;
   }
   }
   h4 {
    margin-left: 5px;
    margin-right: 5px;
   }
`;

const FormFooter = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

    .form-footer-icon {
      display: flex;
      width: 100%;
      max-width: 350px;
      justify-content:space-between ;

      div {
        height: 48px;
        width: 48px;
        border: 1px solid #787A7D;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        //margin-left: 80px;
        gap: 30px;

        img {
          height: 23px;
        }
      }
    }

    .footer-text {
      margin-top: 30px;
      font-size: 16px;
      font-weight: 700;

      span {
        color: #233BA9;
      }
    }

`;
