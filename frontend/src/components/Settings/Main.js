import React from 'react'
import styled from 'styled-components'
import human from '../../assets/images/Settings/human.png'
import notifications from '../../assets/images/Settings/notifications.png'
import Accounts from './Account'
import Notifications from './Notifications'
import Preferences from './Preferences'
import Privacy from './Privacy'

export default function Main() {
    const StyledParent = styled.div`
        width: 80%;

        @media (min-width: 800px) {

        }
    `
     const StyledImages = styled.div`
     display: flex;
     justify-content: flex-end;
     margin-right: 2rem;
     align-items: center;
     gap: 10px;
     margin-top: 56px;
 `

 const StyledNotifications = styled.img`
     width: 32px;
     height: 32px;
 `
 const StyledHuman = styled.img`
     width: 52px;
     height: 52px;
 `

 const StyledText = styled.div`
     display: flex;
     flex-direction: column;
     gap: 2.185rem;
     margin: 0 30px;
     border-bottom: 0.5px solid #6F7174;
 `
 const StyledHeader = styled.h2`
     font-weight: 700;
     font-size: 28px;
     color: #2B2C34;
 `

 const StyledOptions = styled.ul`
     display: flex;
     gap: 1rem;
 `
 
 const StyledOption = styled.li`
     color: #787A7D;
     background: transparent;
     border: 0;
     padding-bottom: 10px;
     list-style: none;

     &: {
      border-bottom: 3px solid rgb(35, 59, 169);
      color: blue;
     }

     &:hover {
         cursor: pointer;
     }
 `

    const [tab, setTab] = React.useState("accounts");

    // let styles = {
    //   borderBottom: "3px solid rgb(35, 59, 169)",
    //   color: "blue"
    //   };

  
    
  return (
    <StyledParent>
      <div>
        <StyledImages>
          <StyledNotifications src={notifications} alt="" />
          <StyledHuman src={human} alt="" />    
        </StyledImages>
        <StyledText>
          <StyledHeader>Settings</StyledHeader>
          <StyledOptions>
              <StyledOption onClick={() => setTab("accounts")}> Accounts</StyledOption>
              <StyledOption onClick={() => setTab("preferences")} >Preferences</StyledOption>
              <StyledOption onClick={() => setTab("notifications")} >Notifications</StyledOption>
              <StyledOption onClick={() => setTab("privacy")}>Privacy & Security</StyledOption>
          </StyledOptions>
        </StyledText>
      </div>

      {/* {tab === "accounts" && <Accounts />}
      {tab === "preferences" && <Preferences />}
      {tab === "notifications" && <Notifications />}
      {tab === "privacy" && <Privacy />} */}
    </StyledParent>
  )
}
