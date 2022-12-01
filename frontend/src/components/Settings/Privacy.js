import React from 'react'
import styled from 'styled-components';

function Privacy() {

  const StyledEmaildiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 20px 0;
`;

const StyledButton = styled.button`
  width: 80px;
  height: 30px;
  color: blue;
  border: 1px solid blue;
  border-radius: 2px;
  font-size: 12px;

  &:hover {
    color: orange;
    border: 1px solid orange;
  }
`;

const StyledEmail = styled.div`
  font-weight: bold;
`;

const Styledh3 = styled.h3`
 font-size: 12px;
 color: grey;
 font-weight: 500;
`;

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
margin-bottom: 12px;
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
    <>
    <StyledEmaildiv>
    <StyledEmail>Two Factor Authentication
      <Styledh3>When enabled, your account is further protected from being hacked</Styledh3>
    </StyledEmail>
    <StyledButton>Enable all</StyledButton>
    </StyledEmaildiv>

<StyledEmaildiv>
<StyledEmail>Password
  <Styledh3>To create a new password, it must contain a maximum of 12 letters, an uppercase letter, a number and character</Styledh3>
</StyledEmail>
</StyledEmaildiv>

<StyledInputs>
        <Input1 className='text-input'>
            <label htmlFor="name">Current Password</label>
            <input type="text" name="name"  />
          </Input1>

          <Input1 className='text-input'>
            <label htmlFor="name">New Password</label>
            <input type="text" name="name"  />
          </Input1>

          <Input1 className='text-input'>
            <label htmlFor="email">Confirm New Password</label>
            <input type="email" name="email"  />
          </Input1>
          </StyledInputs>
     <Buttons>
     <StyledButton1>Discard</StyledButton1>
     <StyledButton2>Save Changes</StyledButton2>
     </Buttons>

</>
  )
}

export default Privacy