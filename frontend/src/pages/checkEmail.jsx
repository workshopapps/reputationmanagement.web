import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mail from '../assets/images/img/mail.gif';

const CheckEmail = () => {
	return (
		<LoginContainer>
			{/* <Link to="/">
				<ReputeLogo>
					<img src={REPUTE} alt="Repute Logo" />
				</ReputeLogo>
			</Link> */}
			<StyledBody>
				<img src={mail} alt="Repute Logo" />
				<h2>Follow the link sent to your mail box.</h2>
				<StyledButton>
					<Link to="/">Go to Homepage</Link>
				</StyledButton>
			</StyledBody>
		</LoginContainer>
	);
};

// Styling

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// align-items: center;
	width: 80%;
	margin: 0 auto;
	height: 100vh;

	h2 {
		font-style: normal;
		font-weight: 700;
		font-size: 28px;
		color: #2b2c34;
		text-align: center;
	}
	p {
		color: #6f7174;
		text-align: center;
		margin-bottom: 30px;
	}

	@media screen and (min-width: 768px) {
		width: 430px;
	}
`;
// const ReputeLogo = styled.div`
// 	margin-top: 30px;
// 	margin-bottom: 40px;
// 	img {
// 		display: block;
// 		margin-left: auto;
// 		margin-right: auto;
// 		width: 40%;
// 	}
// 	@media (max-width: 320px) {
// 		margin-bottom: 10px;
// 	}
// `;
const StyledBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		margin-top: -10px;
		text-align: center;
		// width: 60%;
	}
	h2 {
		margin-top: -10px;
	}
`;
const StyledButton = styled.button`
	text-align: center;
	padding: 12px 12px;
	border: none;
	border-radius: 4px;
	// background: #233BA9;
	// color: #fff;
	color: #233ba9;
`;

export default CheckEmail;
