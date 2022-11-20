import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import google from '../../assets/images/wrgr/google.png'

const WRGRReview = () => {
  return (
    <Wrapper>
      <div className="my-4">
        <div className="my-10">
        <h4 className="">
          What our customers say
        </h4>
        <h1 className="">
          These companies trust us
        </h1>
        </div>
        <div className="md:flex gap-3 justify-around">
          <Box>
            <img src={google} alt="google" className='m-1' />
            <h3>
              How FixIt has helped us grow our business
            </h3>
              <p>
              <Link to="we-remove-google-search">
                Learn More
              </Link>
            </p>
          </Box>
          <Box>
            <img src={google} alt="google" className='m-1' />
            <h3>
              How FixIt has helped us grow our business
            </h3>
              <p>
              <Link to="we-remove-google-search">
                Learn More
              </Link>
            </p>
          </Box>
          <Box>
            <img src={google} alt="google" className='m-1' />
            <h3>
              How FixIt has helped us grow our business
            </h3>
            <p>
              <Link to="we-remove-google-search">
                Learn More
              </Link>
            </p>
          </Box>
        </div>
      </div>
    </Wrapper>
  )
}

export default WRGRReview

const Wrapper = Styled.section`
padding:2rem;
text-align:center;
font-weight: 500;

h4{
  font-size:1.4rem;
}
h1{
  font-size:2rem;
}

`
const Box = Styled.div`
background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${google}) no-repeat;
border-radius: 4px;
background-size: contain;
color:white;
text-align:left;
padding:.6rem;

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

`