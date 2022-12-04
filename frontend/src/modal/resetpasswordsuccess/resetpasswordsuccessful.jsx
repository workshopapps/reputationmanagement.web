import React from 'react'
import { DONE_ICON } from '../../assets/image'
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export default function ResetSuccess({ resetPasswordModal }) {
  const success = 
  <StyledDiv>
    <StyledImg src={DONE_ICON} alt="success" />
    <p>Password Reset Successful</p>
    <StyledLink to="/dashboard">Ready to go</StyledLink>
  </StyledDiv>
  ;
  const failure = 
  <StyledDiv>
      <StyledIcon />
      <p>Password Reset Failed</p>
      <StyledLink to="/password-recovery">Try Again</StyledLink>
  </StyledDiv>

  return (
    <div>
      {resetPasswordModal ? success : failure}
    </div>
  )
}

const StyledImg = styled.img`
  height: 150px;
  width: 150px;
  margin: 0 auto;
`

const StyledIcon = styled(FaTimes)`
  height: 150px;
  width: 150px;
  margin: 0 auto;
  color: red;
`

const StyledDiv = styled.div`
  background-color: #233ba9;
  text-align: center;
  padding: 20px 0;
  

  p{
    color: white;
    padding: 10px 0;
    font-size: 20px;
  }
`
const StyledLink = styled(Link)`
  color: white;
  text-align: center;
  margin: 0 auto 30px;
  padding: 5px 10px;
  border: 1px solid white;
  border-radius: 30px;
`
