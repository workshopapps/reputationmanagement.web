import React from 'react'
import styled from 'styled-components';

function Notifications() {

  const MainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledEmail = styled.div`
  font-weight: bold;
`;

const StyledEmail2 = styled.div`
  font-weight: 400;
`;

const Email = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 margin-top: 50px;

`;

const Styledh3 = styled.h3`
 font-size: 12px;
 color: grey;
 font-weight: 500;
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

const StyledEmaildiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 20px 0;
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
    <MainDiv className='text-input'>

           <StyledEmaildiv>
            <StyledEmail>Email Notifications
              <Styledh3>Set which notification you will like to receive via email</Styledh3>
            </StyledEmail>
            <StyledButton>Enable all</StyledButton>
            </StyledEmaildiv>

            <StyledEmaildiv>
            <StyledEmail2>Complaint Status
              <Styledh3>Get notified about the status of your complaint</Styledh3>
            </StyledEmail2>
            <StyledButton>Enable</StyledButton>
            </StyledEmaildiv>

            <StyledEmaildiv>
            <StyledEmail2>News and Updates
              <Styledh3>Stay updated as we bring you news of updates and promotions</Styledh3>
            </StyledEmail2>
            <StyledButton>Enable</StyledButton>
            </StyledEmaildiv>

            <StyledEmaildiv>
            <StyledEmail2>Weekly Newsletter
            </StyledEmail2>
            <StyledButton>Enable</StyledButton>
            </StyledEmaildiv>

            <StyledEmaildiv>
            <StyledEmail2>Invoice Receipt
              <Styledh3>Get a copy of your invoice Receipt sent to your mail</Styledh3>
            </StyledEmail2>
            <StyledButton>Enable</StyledButton>
            </StyledEmaildiv>

            <Email>
           <StyledEmaildiv>
            <StyledEmail>Push Notifications
              <Styledh3>Set which notification you will like to receive on the website</Styledh3>
            </StyledEmail>
            <StyledButton>Enable all</StyledButton>
            </StyledEmaildiv>

            <StyledEmaildiv>
            <StyledEmail2>Complaint Status
              <Styledh3>Get notified about the status of your complaint</Styledh3>
            </StyledEmail2>
            <StyledButton>Enable</StyledButton>
            </StyledEmaildiv>

            <StyledEmaildiv>
            <StyledEmail2>News and Updates
              <Styledh3>Stay updated as we bring you news of updates and promotions</Styledh3>
            </StyledEmail2>
            <StyledButton>Enable</StyledButton>
            </StyledEmaildiv>

            <StyledEmaildiv>
            <StyledEmail2>Weekly Newsletter
            </StyledEmail2>
            <StyledButton>Enable</StyledButton>
            </StyledEmaildiv>

            <StyledEmaildiv>
            <StyledEmail2>Invoice Receipt
              <Styledh3>Get a copy of your invoice Receipt sent to your mail</Styledh3>
            </StyledEmail2>
            <StyledButton>Enable</StyledButton>
            </StyledEmaildiv>
            </Email>

            <Buttons>
             <StyledButton1>Discard</StyledButton1>
             <StyledButton2>Save Changes</StyledButton2>
          </Buttons>

          </MainDiv>
  )
}

export default Notifications