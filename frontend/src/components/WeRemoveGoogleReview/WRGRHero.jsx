import React from 'react'
import Styled from 'styled-components';
import { StyledButton, StyledTextButton } from '../Styles/Body/Button.styled';
import { StyledContainer } from '../Styles/Body/Container.styled';
import {
  StyledH1,
  StyledH3,
  StyledText,
  StyledH2Center,
} from '../Styles/Body/Text.styled';
import { Link } from "react-router-dom"


const WRGRHero = () => {
  return (
    <>
      <Wrapper className='col-md-10 ml-auto mr-auto text-center mt-5'>
        <StyledContainer>
          <StyledH1 black className='h1'>
            Remove negative google reviews.
            Improve your company’s conversion rate.
          </StyledH1>
          <StyledText className="my-4 h5 text-center">
            Remove your negative google reviews, save your brand’s reputation and increase customer retention rate.
          </StyledText>

          <div className="mt-5">
            <StyledButton>
              <Link to="/#">
                Sign up
              </Link>
            </StyledButton>
            <StyledButton outlined>
              <Link to="/#">
                Get a quote
              </Link>
            </StyledButton>
          </div>

        </StyledContainer>
      </Wrapper>
    </>
  )
}

export default WRGRHero

const Wrapper = Styled.div`
padding: 2rem; 
 
h1{
  line-height: 1.6;
}

button {
  margin:0 0.7rem ;
  width: 25% ;
}

a:hover {
color:auto !important;
}
`