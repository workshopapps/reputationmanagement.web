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
            
            @media screen and (max-width: 425px){

                text-align: left;

                
                h3{
                   text-aling: left;
                   font-size: 18px;
                }
            }
        `


    const FaqFooterLinks = styled.div`
        
        display: flex;
        justify-content: center;
        gap: 24px;
        margin-top: 48px;

        @media screen and (max-width: 425px){
            gap: 8px;
        }

    `

    
    const SendMailLink = styled.a`
        display: inline-block;
        border: 1px solid;
        padding: 16px 40px;
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        color: ${(props) => props.color};
        background: ${(props) => props.background};

        @media screen and (max-width: 425px){
            padding: 8px 24px;
            font-size: 14px;
        }
    `


  return (
        
    <FaqFooterWraper>

        <FaqFooterHeading>
            <h3>Question not answered yet? Shoot us a <br/>mail or chat with a member of our team</h3>
        </FaqFooterHeading>

        <FaqFooterLinks>
            <SendMailLink href='#' background='#233BA9' color='#FFFFFF'>Send a Mail</SendMailLink>
            <SendMailLink href='#' background='transparent' color='#233BA9'>Check with Us</SendMailLink>
        </FaqFooterLinks>

    </FaqFooterWraper>
  )
}

export default FaqFooter