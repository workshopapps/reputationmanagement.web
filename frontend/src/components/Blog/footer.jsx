import styled from 'styled-components';
import bg from '../../pages/Blog/Blog-See All/Assets/bg.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<FooterParentMain>
			<FooterMain>
				<div>
					<Headin1>Get in touch with us today</Headin1>
					<Headin6>
						Here is an opportunity to improve your reputation and get rid of
						malicious comments
					</Headin6>
				</div>

				{/************************REgister****************************************/}
				<FormMain>
					<form>
						<FormSec1>
							<div className="input-area">
								<input placeholder="Full Name*" />
								<input placeholder="Phone*" />
								<input placeholder="Email*" />
							</div>

							<div className="text-area">
								<textarea
									className="textarea-inner"
									placeholder="Tell us about the review"
								/>
							</div>
						</FormSec1>

						<select name="cars" id="cars" >
							<option value="volvo">Where is the review?</option>
							<option value="saab">website</option>
							<option value="mercedes">Mobile App</option>
							<option value="audi">Online Survey</option>
						</select>
						<p>
							Your details are safe & confidential, view our <Link to=''>Privacy Policy</Link> to learn more.
						</p>
						<button>submit</button>
					</form>
				</FormMain>
			</FooterMain>
		</FooterParentMain>
	);
};

export default Footer;

const FooterMain = styled.section`
	max-width: 1500px;
	width: 1500px;
	display: flex;
	justify-content: space-between;
    align-items: center;

	@media (max-width:850px) {
        text-align: center;
      flex-direction: column;
      justify-content: center ;
    }
`;

const Headin1 = styled.section`
	font-size: 45px;
	font-weight: 700;

    @media (max-width:1000px) {
        font-size: 35px;
        margin-right: 15px;
    }
    @media (max-width:520px) {
        font-size: 25px;
        margin-right: 0px;
    }
`;
const Headin6 = styled.section`
	font-size: 18px;
	font-weight: 400;
    margin-right: 15px;

    @media (max-width:850px) {
           margin-top: 20px;
           margin-bottom: 20px;
        }
        @media (max-width:520px) {
        font-size: 13px;
        margin-right: 0px;
    }
`;

const FormMain = styled.section`
	width: 500px;

    form {

        select {
            width: 100%;
            padding: 10px 14px;
			font-size: 16px;
            border: 1px solid #a5a6a8;
            outline: none;
            border-radius: 8px;
            color: #a5a6a8;
        }

        p {
            font-size: 12px;
            font-weight: 400;
            margin-top: 8px;
            margin-bottom: 16px;
            text-align: left;

            a {
                text-decoration: none;
                color: #F16F04;
            }
        }

        button {
            width: 100%;
            background-color: #233BA9;
            border-radius: 8px;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 600;
            color: white;
        }
    }

    @media (max-width:800px) {
       width: 100%;
    }
`;

const FormSec1 = styled.section`
	display: flex;

	.input-area {
		width: 50%;
		padding-right: 10px;
		input {
			border: 1px solid #a5a6a8;
			width: 100%;
			margin-bottom: 8px;
			border-radius: 8px;
			padding: 10px 14px;
			font-size: 16px;
            outline: none;
		}

        @media (max-width:800px) {
            padding-right: 0px;
        }
	}

	.text-area {
		width: 50%;
		padding-bottom: 8px;
		padding-left: 10px;
		textarea {
			width: 100%;
			max-width: 100%;
			height: 100%;
			border: 1px solid #a5a6a8;
			border-radius: 8px;
			padding: 10px 14px;
			font-size: 16px;
            outline: none;
		}

        @media (max-width:800px) {
            padding-left: 0px;
        }
	}

    @media (max-width:800px) {
      flex-direction: column;

      .input-area, .text-area {
        width: 100%;
      }
    }
`;

const FooterParentMain = styled.div`
	background: url(${bg}), #eef1fc;
	background-repeat: no-repeat;
	padding: 40px 64px 40px 64px;
	display: flex;
	justify-content: center;
	
    @media (max-width:1000px) {
        padding: 40px 34px 40px 34px;
    }

  
`;
