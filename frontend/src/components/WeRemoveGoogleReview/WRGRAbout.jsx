import React from 'react'
import Styled from 'styled-components'
import { StyledContainer } from '../Styles/Body/Container.styled'

const WRGRAbout = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <div className="md:flex gap-4">
          <div className="my-4">
            <h6 className='my-4'>
              Intoducing Fixit
            </h6>
            <h4>
              Remove your negative google reviews and improve your company’s reputation
            </h4>
          </div>

          <div className="my-4">
            <h6>
              Simple
            </h6>
            <small>
              Save time: We work and rectify and attend to your complains really fast
            </small>
            <h6>
              Fast
            </h6>
            <small>
              Save time: We work and rectify and attend to your complains really fast
            </small>
            <h6>
              Trustworthy
            </h6>
            <small>
              Save time: We work and rectify and attend to your complains really fast
            </small>

          </div>
        </div>

        <div className="my-4">
          <h5 className='my-4'>
            Our Features
          </h5>
          <div className="md:flex gap-3">
            <div className="border box">
              <h1>1</h1>
              <h1> Delete Negative reviews</h1>
              <p className="text">
                We help reach out to the customers that leave the negative reviews on your page, empathize with them and understand them, and sort it out with them. This improves your company’s conversion rate.
              </p>
            </div>
            <div className="border box">
              <h1>2</h1>
              <h1> Delete Negative reviews</h1>
              <p className="text">
                We help reach out to the customers that leave the negative reviews on your page, empathize with them and understand them, and sort it out with them. This improves your company’s conversion rate.
              </p>
            </div>
          </div>
        </div>

      </StyledContainer>
    </Wrapper>
  )
}

export default WRGRAbout

const Wrapper = Styled.div`
padding: 5rem 2rem; 
font-weight: 600; 
background:  #EEF1FC ;
font-family: Lato !important;
font-size: larger;
font-weight: 700;
line-height: 54px;
letter-spacing: 0em;


h1{
  line-height: 1.6;
  margin-bottom:2rem;
}

h4{
  font-size:1.6rem;
}

.box {
  border: 1px solid gray;
  border-radius:3px;
  padding:10px 10px 1rem 10px;
  margin-top:1rem;
  
}
.text{
  font-weight:400;
  line-height: 1.5;
}
}
`