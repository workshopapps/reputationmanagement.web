import React from 'react'
// import footer from '../../assets/images/wrgr/footer.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import foot_img from "../../assets/images/wrgr/Banner-Background-Desktop.png"

const WRGRFooter = () => {
  return (
    
    <StyledFooter data-testid="W-footer">

      <h2>We are here to help maintain your brand's <br /> reputation. If we don't succeed you don't pay</h2>
	  <Link to="we-remove-google-search">
      <button>Get Started</button>
	  </Link>
    </StyledFooter>
  )
}

export default WRGRFooter


const StyledFooter = styled.div`
	background-image: url(${foot_img});
	background-repeat: no-repeat;
	background-size: cover;
	height: 400px;
	
	text-align: center;

	h2 {
		padding-top: 30px;
		color: #2b2c34;
		font-size: 45px;
		font-weight: 700;
		font-style: bold;
		line-height: 66px;
	}

	button {
		background: ${(props) => (props.outlined ? '#fff' : '#233BA9')};
		padding: 10px 40px;
		border-radius: 6px;
		color: ${(props) => (props.outlined ? '#233BA9' : '#fff')};
		border: ${(props) => (props.outlined ? '1px #233BA9 solid' : '1px #233BA9 solid')};
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		text-align: center;
		margin-top: 50px;
	}



	@media (max-width: 1020px) {
			display: none;

		}
`;