import React from 'react'
import footer from '../../assets/images/wrgr/footer.png'
import styled from 'styled-components'


const WRGRFooter = () => {
  return (
    // <Wrapper>
    //   <img src={footer} alt="img" />
    // </Wrapper>
    <StyledBottom>

      <h2>We are here to help maintain your brand's <br /> reputation.If we dont suceed you don pay</h2>
      <button>Get Started</button>
    </StyledBottom>
  )
}

export default WRGRFooter


const StyledBottom = styled.div`
	background-color: #eef1fc;
	height: 400px;
	margin-bottom: 20px;
	text-align: center;

	h2 {
		padding-top: 30px;
		color: #2b2c34;
		font-size: 45px;
		font-style: bold;
		line-height: 66px;
	}

	button {
		background: ${(props) => (props.outlined ? '#fff' : '#233BA9')};
		padding: 10px 40px;
		border-radius: 6px;
		color: ${(props) => (props.outlined ? '#233BA9' : '#fff')};
		border: ${(props) =>
    props.outlined ? '1px #233BA9 solid' : '1px #233BA9 solid'};
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		text-align: center;
		margin-top: 50px;
	}



	@media (max-width: 1020px) {
			display: none;
	
	}
`