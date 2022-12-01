import React from 'react'
import styled from "styled-components";
import human from '../../assets/images/Settings/human.svg';

function Accounts() {
   
  const StyledParent = styled.div`
    height: 400px;
    margin-top: 50px;
  `


const StyledProfile = styled.h2`
  font-weight: bold;
`

const Info = styled.h3`
  font-weight: 300;
  font-size: 15px;
  padding: 10px 0 40px 0;
`


const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding:20px 0 0 0;
`
  
  const Input1 = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

 label {
  margin-bottom: 8px;
 }

  input {
 border: 1px solid #D2D3D4;
 border-radius: 6px;
  height: 35px;
  width: 500px;
  padding-left: 10px;
  padding-right: 10px;
  outline: none;
 }
`;

const StyledButton1 = styled.button`
  width: 80px;
  height: 30px;
  color: blue;
  border: none;
  border-radius: 2px;
  font-size: 12px;
`;

const StyledButton2 = styled.button`
  width: 80px;
  height: 30px;
  color: #fff;
  border: none;
  border-radius: 2px;
  font-size: 12px;
  background: blue;
`;

const Buttons = styled.button`
   display: flex;
   justify-content: flex-end;
   padding: 50px 0 100px 520px;
`;



  return (

      <StyledParent>
        
        <StyledProfile>
          Profile Information
          <Info>This information will be publicly displayed so be careful what you fill</Info>
        </StyledProfile>
  
        <img src={human} alt="" />

        <StyledInputs>
        <Input1 className='text-input'>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name"  />
          </Input1>

          <Input1 className='text-input'>
            <label htmlFor="name">Last Name</label>
            <input type="text" name="name"  />
          </Input1>

          <Input1 className='text-input'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"  />
          </Input1>

          <Input1 className='text-input'>
            <label htmlFor="number">Phone Number</label>
            <input type="number" name="number"  />
          </Input1>
          </StyledInputs>

          <Buttons>
             <StyledButton1>Discard</StyledButton1>
             <StyledButton2>Save Changes</StyledButton2>
          </Buttons>

          </StyledParent>
  )
}

export default Accounts