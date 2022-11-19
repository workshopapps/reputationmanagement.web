import React from 'react'
import arrowDown from './Assets/arrow-down.png'
import styled from 'styled-components'
import FaqFooter from './FaqFooter'



const FaqWraper = styled.div`

    display: flex;
    flex-direction: column;
    border: 1px solid #EAECF0;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
    &:hover {
        background-color: #233BA9;
        transition: all 0.5s ease-out;
        border: 1px solid white;

        h2{
            color: white;
        }
    }


    h2{
        font-size: 32px;
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

    & .faq{
        height: 1000px;
    }
`


const FaqQuestion = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const FaqArrowDown = styled.div`
    transition: all 0.2s ease;
`


const FaqAnswer = styled.div`
    border-top: 1px solid #98A2B3;
    opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.4s ease;
`


function FAQ({faq, index}) {
  return (
    <FaqWraper key={faq.id} className='faq'>
        <FaqQuestion>
            <h2>{faq.question}</h2>
            <div>
                <img src={arrowDown}/>
            </div>
        </FaqQuestion>

        <FaqAnswer>
            <p>{faq.answer}</p>
        </FaqAnswer>

        <FaqFooter />
    </FaqWraper>
  )
}

export default FAQ