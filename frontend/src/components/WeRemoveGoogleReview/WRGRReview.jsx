import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import google from '../../assets/images/wrgr/google.png'
import line from '../../assets/images/wrgr/reviewLine.svg'
import backdrop_1 from '../../assets/images/wrgr/backdrop1.svg'
import backdrop_2 from '../../assets/images/wrgr/backdrop2.svg'
import backdrop_3 from '../../assets/images/wrgr/backdrop3.svg'

const WRGRReview = () => {
  return (
    <Wrapper  data-testid="W-review">
      <div className="">
        <HeadingMain className="">
          <HeadingBg>
        <h4 className="">
          What our customers say
        </h4>
        </HeadingBg>
        <h1 className="">
          These companies trust us
        </h1>
        </HeadingMain>

        {/*******************************START OF CARD SECTION*************************************************************8*/}

        <ResponsiveCard >
          <Box>
            <img src={google} alt="google" className='backdrop-icon' />

            <TextPosition>
            <h3>
              How FixIt has helped us grow our business
            </h3>
              <p>
              <Link to="/we-remove-google-search">
                Learn More
              </Link>
            </p>
            </TextPosition>
          </Box>

          <Box>
            <img src={google} alt="google" className='backdrop-icon' />

            <TextPosition>
            <h3>
              How FixIt has helped us grow our business
            </h3>
              <p>
              <Link to="/we-remove-google-search">
                Learn More
              </Link>
            </p>
            </TextPosition>
          </Box>

          <Box>
            <img src={google} alt="google" className='backdrop-icon' />
          <TextPosition>
            <h3>
              How FixIt has helped us grow our business
            </h3>
            <p>
              <Link to="/we-remove-google-search">
                Learn More
              </Link>
            </p>
            </TextPosition>
          </Box>
        </ResponsiveCard>
      </div>
    </Wrapper>
  )
}

export default WRGRReview

const Wrapper = styled.section`
padding:2rem;
//text-align:center;
font-weight: 500;

h4{
  font-size:1.4rem;
}
h1{
  font-size:2rem;
}

`;

const Box = styled.div`
position:relative;
background-image:  url(${backdrop_1});
background-repeat:no-repeat;
border-radius: 4px;
background-size: cover;
color:white;
z-index:0;
height :340px;
background-color:red;

&::before {
  position:absolute;
  content:"";
  height :100%;
width:100%;
  z-index:3;
  background-color: #050505a0;
  border-radius: 8px;
 // left:0;
}

&:nth-child(2) {
  background-image:  url(${backdrop_2});
  background-repeat:no-repeat;
border-radius: 8px;
background-size: cover;
}

&:nth-child(3) {
  background-image:  url(${backdrop_3});
  background-repeat:no-repeat;
border-radius: 8px;
background-size: cover;
}

h3{
  font-size: 1rem;
  margin-top:5rem;
  margin-bottom:1rem;
 
}
p{
 
  font-size: .8rem;
  margin-bottom:2rem;
  text-decoration:underline;
}
.backdrop-icon {
  z-index:4;
  position:absolute;
  left:10px;
  top:10px;

}

`;

const HeadingBg = styled.div `
      height:73px;
        width:280px;
        background-size:contain;
        background-repeat:no-repeat;
        background-image:url(${line});
        display: flex;
        justify-content: center;
        align-items: end;
        padding-left:10px;
        padding-bottom:10px;

        @media (max-width:520px) {
          height:50px;
        width:200px;
              h4 {
                font-size:16px;
              }
            }
`;

const HeadingMain = styled.div `
     display:flex;
     justify-content:center;
     align-items:center;
     flex-direction:column;

      h1 {
        font-size:45px;
        font-weight:700;
        color:#0E1844;

        @media (max-width:1000px) and (min-width:521px) {
              font-size:35px;
            }

            @media (max-width:520px) {
              font-size:25px;
            }
      }
`;

const ResponsiveCard = styled.div`
        width: 100%;
        //display:flex;
        display: grid;
        gap: 1.5rem;
         grid-template-columns: repeat(3, 1fr); 
         margin-top: 43px;

         @media screen and (min-width:521px)  and (max-width:1000px)  {
          grid-template-columns: repeat(2, 1fr); 
            }

         @media (max-width:520px) {
          grid-template-columns: repeat(1, 1fr); 
            }
`;

const TextPosition = styled.div`
padding:10px;
       position:absolute;
      bottom:0;
      z-index:5;
`;