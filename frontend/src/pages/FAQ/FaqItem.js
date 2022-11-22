import React from 'react'
import arrowDown from './Assets/arrow-down.png'
import styled from 'styled-components'


const FaqWraper = styled.div.attrs(props => ({
    className: props.className
}))`
    &.faq.open .faq-question{
        margin-bottom: 20px;
    }

    &.faq.open .faq-answer{
        max-height: 1000px;
        opacity: 1;
    }

    &.faq.open .faq-question .arrow-down{
        transform: translateY(-50%) rotate(180deg)
    }

        

    display: flex;
    flex-direction: column;
    border: 1px solid #EAECF0;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
    &:hover {
        // background-color: #233BA9;
        transition: all 0.5s ease-out;

    }


    h2{
        font-size: 28px;
        font-weight: 700;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        color: #4B515D;

    }


    @media screen and (max-width: 425px){ 
        
        padding: 12px;

        h2{
            font-size: 24px;
        }

        p{
            font-size: 18px;
        }
    }

    
`


const FaqQuestion = styled.div.attrs(props => ({
    className: props.className
}))`
    

    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s ease;

    

    @media screen and (max-width: 425px){

    }

`

const FaqArrowDown = styled.div.attrs(props => ({
    className: props.className
}))`
    transition: all 0.2s ease;
    width: auto;
    height: auto;
    transform: translateY(-50%)
    border: 1px solid
`


const FaqAnswer = styled.div.attrs(props => ({
    className: props.className
}))`
    border-top: 1px solid #98A2B3;
    opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.4s ease;
    padding-top: 20px;
`




function FaqItem({faq, index, toggleFaq}) {
  return (
    <FaqWraper key={index} className={"faq " + (faq.open ? 'open' : '')} onClick={() => toggleFaq(index)}>
        <FaqQuestion className="faq-question">
            <h2>{faq.question}</h2>
            <FaqArrowDown className="arrow-down">
                <img src={arrowDown} alt=""/>
            </FaqArrowDown>
        </FaqQuestion>


        <FaqAnswer className="faq-answer">
            <p>{faq.answer}</p>
        </FaqAnswer>
    </FaqWraper>
  )
}

export default FaqItem