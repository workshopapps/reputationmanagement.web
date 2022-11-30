import React from 'react'
import Styled from 'styled-components'
import { StyledContainer } from '../Styles/Body/Container.styled'
import line from '../../assets/images/wrgr/reviewLine.svg'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const WRGRAbout = () => {
  return (
    <Wrapper data-testid="W-about">
      <div>
        <div className="container-inner">
          <div className="container-1">
            <HeadinBg className='heading-bg'>
              <h6 className=''>
                Intoducing Fixit
              </h6>
            </HeadinBg>
            <h4>
              Remove your negative google reviews and improve your company’s reputation
            </h4>
          </div>

          <div className="container-2">
            <h6>
              Simple
            </h6>
            <span>
              Save time: We work and rectify and attend to your complains really fast
            </span>
            <h6>
              Fast
            </h6>
            <span>
              Save time: We work and rectify and attend to your complains really fast
            </span>
            <h6>
              Trustworthy
            </h6>
            <span>
              Save time: We work and rectify and attend to your complains really fast
            </span>

          </div>
        </div>

        <div className="my-4">
          <HeadinMain>
            <HeadinBg>
              <h5 className='my-4'>
                Our Features
              </h5>
            </HeadinBg>

            <button>
              <Link to="/about-us">
                Read more
              </Link>
            </button>
          </HeadinMain>

          <BoxMain>
            <BoxChild>
              <h1>1</h1>
              <h3> Delete Negative reviews</h3>
              <p className="text">
                We help reach out to the customers that leave the negative reviews on your page, empathize with them and understand them, and sort it out with them. This improves your company’s conversion rate.
              </p>
            </BoxChild>
            <BoxChild>
              <h1>2</h1>
              <h3> Delete Negative reviews</h3>
              <p className="text">
                We help reach out to the customers that leave the negative reviews on your page, empathize with them and understand them, and sort it out with them. This improves your company’s conversion rate.
              </p>
            </BoxChild>
          </BoxMain>
        </div>

      </div>
    </Wrapper>
  )
}

export default WRGRAbout

const Wrapper = styled.div`
padding: 8rem 5rem; 
font-weight: 600; 
background:  #EEF1FC ;
font-family: Lato !important;
font-size: larger;
font-weight: 700;
line-height: 54px;
letter-spacing: 0em;

@media (max-width:1000px) {
  padding: 8rem 3rem; 
            }

@media (max-width:520px) {
  padding: 8rem 2rem; 
            }


div {

  .container-inner {
    display:flex;

    @media (max-width:1000px) {
              flex-direction:column;
            }

    .container-1 {
      width:50%;

      @media (max-width:1000px) {
        width:100%;
            }

      
      h4 {
        font-size:36px;
        font-weight:700;
        color:#0E1844;

        @media (max-width:600px) {
          font-size:20px;
            }
      }
    }

    .container-2 {
      padding:24px;
      width:50%;
      line-height:40px;

      @media (max-width:1000px) {
        width:100%;
            }


      h6 {
        font-size:24px;
        font-weight:400;
        color:#0E1844;
      }

      span {
        font-size:14px;
        font-weight:400;
        color:#0E1844;
      }
    }
  }
}

`;

const HeadinBg = styled.div`
      height:73px;
        width:200px;
        background-size:contain;
        background-repeat:no-repeat;
        background-image:url(${line});
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width:520px) {
          height:50px;
        width:200px;
              h4 {
                font-size:16px;
              }
            }
`;

const HeadinMain = styled.div`
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      button {
        color: #F16F04;
        font-size: 16px;
        font-weight: 600;
      }
`;

const BoxMain = styled.div`
      display: flex;
      justify-content: space-between;

      @media (max-width:1000px) {
              flex-direction:column;
            }

`;

const BoxChild = styled.div`
     width: 45%;
     border: 1px solid #D2D3D4;
     padding: 0px 24px 40px 24px;

     @media (max-width:1000px) {
      margin-bottom:20px;
      width: 100%;
            }

      h1 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 60px;
        color: #6F7174;
      }

      h3 {
        font-size: 45px;
        font-weight: 700;
        margin-bottom: 40px;

        
      @media (max-width:520px) {
              font-size: 25px;
            }
      }

      .text {
        font-size: 18px;
        font-weight: 400;
        color: #0E1844;
        line-height: 150%;

        @media (max-width:520px) {
              font-size: 16px;
            }
      }

`;