import React from 'react'
import styled from 'styled-components';

function Preferences() {

  const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding:20px 0 0 0;
`

const StyledCheck = styled.div`
display: flex;
width: 250px;
align-items: center;


`

const Styledinput = styled.h3`
 display: flex;
 flex-direction: column;
`
const StyledH3 = styled.h3`
 margin-left: 10px;
`
  
  const Input1 = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;

 label {
  margin-bottom: 8px;
 }

 select {
  width: 250px;
  border: 1px solid grey;
  color: grey;
  border-radius: 5px;
 }

  input {
  border: 1px solid #D2D3D4;
  border-radius: 6px;
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
     <>
    <StyledInputs>
    <Input1 className='text-input'>
            <label htmlFor="name">First Name</label>
            <select>
              <option>Language</option>
              <option>English</option>
              <option>Hausa</option>
              <option>Igbo</option>
              <option>Yoruba</option>
            </select>
          </Input1>

          <Input1 className='text-input'>
            <StyledCheck><label htmlFor="name">Last Name</label></StyledCheck>
            <Styledinput>
            <StyledCheck><input type="Checkbox" name="name"  /> <StyledH3> use a screen reader </StyledH3> </StyledCheck>
            <StyledCheck><input type="Checkbox" name="name"  /> <StyledH3>I use large text </StyledH3> </StyledCheck>
            <StyledCheck><input type="Checkbox" name="name"  /> <StyledH3>I use high contrast colors </StyledH3> </StyledCheck>
            </Styledinput>
          </Input1>
          </StyledInputs>

          <Buttons>
             <StyledButton1>Discard</StyledButton1>
             <StyledButton2>Save Changes</StyledButton2>
          </Buttons>

          </>
  )
}

export default Preferences