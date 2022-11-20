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
import loveclip from '../../assets/images/wrgr/loveclip.png'
import m from '../../assets/images/wrgr/m.png'
import circular from '../../assets/images/wrgr/circular.png'
import ob from '../../assets/images/wrgr/ob.png'
import tyme from '../../assets/images/wrgr/tyme.png'
import sushi from '../../assets/images/wrgr/sushi.png'


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
              <Link to="/get-a-quote">
                Get a quote
              </Link>
            </StyledButton>
          </div>
          <div className="user ">
            <h5>
              Used and loved by 1M users across 199 countries
            </h5>
            <div className="my-4 grid grid-cols-6 gap-4">
              <img src={circular} alt="img" />
              <img src={tyme} alt="img" />
              <img src={m} alt="img" />
              <img src={ob} alt="img" />
              {/* <img src={circular} alt="img" /> */}
              <img src={sushi} alt="img" />
              <img src={loveclip} alt="img" />
            </div>
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
  line-height: 1.2;
  font-size:clamp(1rem, 3rem, 3rem)
}

button {
  margin:0 0.7rem ;
  width: 25% ;
}

a:hover {
color:auto !important;
}
h5{
  font-weight:500;
  margin-top:1;
  padding: 1rem 0 ;
  text-align: left;
}

.user{
  margin-top: 3rem;
  padding: 1rem;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15);
}
`