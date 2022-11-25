import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import settings from '../../assets/images/Settings/settings.png'
import home from '../../assets/images/Settings/home.png'
import menu from '../../assets/images/Settings/menu.png'
import logo from '../../assets/images/Settings/logo.png'

export default function Sidebar() {
    const StyledParent = styled.div`
        padding: 1.875rem;
        width: 20%;
        height: 100vh;
        border-left: 3px solid #fff;
        box-shadow: 2px 2px 8px rgba(120, 122, 125, 0.15);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 800px) {
            display: none;
        }
    `

    const StyledChild = styled.div`
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 1.875rem;
    `

    const StyledLink = styled(Link)`
        display: flex;
        align-items: center;
        gap: 0.875rem;
        font-size: 16px;
        color: #A5A6A8;
        text-decoration: none;
    `

    const StyledLogo = styled.div`
        margin-bottom: 1.875rem;
    `

    
  return (
        <StyledParent>
            <StyledLogo>
                <img src={logo} alt="logo"/>
                <StyledChild>
                    <StyledLink to="#"><img src={home} alt=""/>Home</StyledLink>
                    <StyledLink to="#"><img src={menu} alt=''/>Dashboard</StyledLink>
                </StyledChild>
            </StyledLogo>
            
            <div className="items-end">
                <StyledLink to="#"><img src={settings} alt=''/><span  className="mx-2">Settings</span></StyledLink>
            </div>
        </StyledParent>
  )
}
