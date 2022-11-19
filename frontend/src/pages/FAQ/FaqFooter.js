import React from 'react'
import styled from 'styled-components'

function FaqFooter() {

    const FaqFooterWraper = styled.div`
       text-align: center; 
       margin-top: 100px;
    `

    const FaqFooterHeading = styled.div`
        h3{
            font-size: 28px;
            font-weight: 700;
            line-height: 150%;
        }
    `


    const FaqFooterLinks = styled.div`
        
        display: flex;
        justify-content: center;
        gap: 24px;
        margin-top: 48px;

    `

    
    const SendMailLink = styled.a`
        display: inline-block;
        border: 1px solid;
        padding: 16px 40px;
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        color: #FFFFFF;
        background: #233BA9;
    `

    const CheckLink = styled.a`
        display: inline-block;
        padding: 16px 40px;
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;
        border: 1px solid #4560D9;
        color: #233BA9;
    `

  return (
        
    <FaqFooterWraper>

        <FaqFooterHeading>
            <h3>Question not answered yet? Shoot us a <br/>mail or chat with a member of our team</h3>
        </FaqFooterHeading>

        <FaqFooterLinks>
            <SendMailLink href='#'>Send a Mail</SendMailLink>
            <CheckLink href='#' className='check'>Check with Us</CheckLink>
        </FaqFooterLinks>

    </FaqFooterWraper>
  )
}

export default FaqFooter