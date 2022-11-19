import React from 'react'
import styled from 'styled-components'
import hero_bg from '../../assets/images/blog_images/images/hero_bg.png'
import mobile_hero from '../../assets/images/blog_images/images/mobile_hero.png'


const StyledSection = styled.section`
    width: 100%;
    position: relative;
    min-height: 250px;
`

const StyledBody = styled.div`
    position: absolute;
    top: 20%;
    width: 50%;
    margin-left: 60px;

    @media screen and (max-width: 768px) {
        background: #d8d8d6;
        top: 0;
        left: 0;
        height: 100%;
        width: 80%;
        margin-left: 0;
        opacity: 0.7;
        /* margin-left: 35px; */
    }
`

const StyledHeader = styled.h2`
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.01em;
    color: #233BA9;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
        margin-top: 60px;
        font-size: 20px;
        margin-bottom: 8px;
        line-height: 30px;
        margin-left: 20px;
    }
`

const StyledParagraph = styled.p`
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #000000;
    width: 80%;

    @media screen and (max-width: 768px) {
        margin-left: 20px;
        font-size: 15px;
        line-height: 10px;
    }
`

const StyledButton = styled.button`
    background: #F16F04;
    border-radius: 4px;
    padding: 16px 24px;
    color: #FFFFFF;
    margin-top: 52px;
    border: 3px solid #F16F04;

    &:hover {
        cursor: pointer;
    }

    
    @media screen and (max-width: 768px) {
        margin-top: 8px;
        line-height: 12px;
        margin-left: 20px;
    }
`

export default function Hero() {
  return (
    <StyledSection>
        <img src={window.innerWidth > 796 ? hero_bg : mobile_hero} alt="" />
      <StyledBody>
        <StyledHeader>6 Efficient Techniques to Protect Your Brand Reputation in 2023</StyledHeader>
        <StyledParagraph>Protect your brand reputation with the easy-to-implement techniques in our guide</StyledParagraph>
        <StyledButton>Read Article</StyledButton>
      </StyledBody>
    </StyledSection>
  )
}
