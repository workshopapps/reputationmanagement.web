import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import MenuIcon from '../../assets/images/menuIcon.png';
import { StyledButton, StyledTextButton } from '../Styles/Body/Button.styled';
import { StyledContainer } from '../Styles/Body/Container.styled';

const Header = () => {
	return (
		<header>
			<StyledContainer>
				<StyledNav className="">
					<img src={Logo} alt="FixIt" className="logo" />

					<img src={MenuIcon} alt="Menu-Icon" className="menuBtn hidden" />

					<div className="navLinks">
						<NavLink to="/" className="active">
							Home
						</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/blog">Blog</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</div>

					<div className="navButtons">
						<Link to="/login">
							<StyledTextButton>Login</StyledTextButton>
						</Link>
						<Link to="/register">
							<StyledButton>Register</StyledButton>
						</Link>
					</div>
				</StyledNav>
			</StyledContainer>
		</header>
	);
};

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 24px;
	position: relative;

	a {
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		.logo {
			display: block;
			margin: auto;
			width: 70px;
		}
		.menuBtn {
			display: block;
			position: absolute;
			left: 18px;
			cursor: pointer;
		}
		.navLinks,
		.navButtons {
			display: none;
		}
	}
`;

const NavLink = styled(Link)`
	padding: 6px 0;
	margin: 24px;
	color: #787a7d;
	font-size: 18px;
	font-weight: 600;

	&.active {
		color: #233ba9;
		border-bottom: 3px solid #233ba9;
	}

	&:hover {
		color: #233ba9;
	}
`;

const NavButton = styled(Link)`
	padding: 6px;
`;

export default Header;
