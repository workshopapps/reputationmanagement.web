import React from 'react'
import Styled from 'styled-components';
import { StyledButton } from '../Styles/Body/Button.styled';
import { StyledContainer } from '../Styles/Body/Container.styled';
import {
  StyledH1,
  StyledText,
} from '../Styles/Body/Text.styled';
import { Link } from "react-router-dom"
import loveclip from '../../assets/images/wrgr/loveclip.png'
import m from '../../assets/images/wrgr/m.png'
import circular from '../../assets/images/wrgr/circular.png'
import ob from '../../assets/images/wrgr/ob.png'
import tyme from '../../assets/images/wrgr/tyme.png'
import sushi from '../../assets/images/wrgr/sushi.png'
import g_oogle from '../../assets/images/wrgr/review-G.svg'


const WRGRHero = () => {
  return (
    <>
      <Wrapper className='col-md-10 ml-auto mr-auto text-center mt-5' data-testid="W-hero">
        <StyledContainer>
          <TextH1 black className='h1'>
            Remove negative google reviews.<br />
            Improve your company’s conversion rate.
          </TextH1>
          <TextH2 className="">
            Remove your negative google reviews, save your brand’s reputation and increase customer retention rate.
          </TextH2>

          <Buttons className="mt-5">
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
          </Buttons>

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
background-image:url(${g_oogle});
background-repeat:no-repeat;
background-position: left top;
padding: 2rem; 

 
h1{
  line-height: 1.2;
  font-size:clamp(1rem, 3rem, 3rem)
}

button {
  margin:0 0.7rem ;
  width: 200px ;

  @media (max-width:520px) {
    margin-top:10px;
       }
  
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
  margin-top: 90px;
  margin-bottom: 60px;
  padding: 1rem;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15);
}
`;

const TextH2 = Styled.h2`
font-weight: 600;
font-size: 24px;
line-height: 150%;
margin-top:60px;
padding-left:30px;
  text-align:center;

  @media (max-width:800px) {
    font-size: 20px;
            }

            @media (max-width:520px) {
    font-size: 15px;
            }
`;

const TextH1 = Styled.h2`
font-weight: 700;
font-size: 57px;
line-height: 150%;
margin-top:20px;
  text-align:center;
  padding-left:30px;

  @media (max-width:1000px) {
    font-size: 37px;
            }

  @media (max-width:800px) {
    font-size: 27px;
            }

  @media (max-width:520px) {
    font-size: 20px;
            }
`;

const Buttons = Styled.div`
margin-top:100px;
`;

