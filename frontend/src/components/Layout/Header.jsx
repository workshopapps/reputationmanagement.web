import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import MenuIcon from '../../assets/images/menuIcon.png';
import { StyledButton, StyledTextButton } from '../Styles/Body/Button.styled';
import { StyledContainer } from '../Styles/Body/Container.styled';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<header style={{width: '100%'}}>
			<StyledContainer>
				<StyledNav className="">
					<img src={Logo} alt="FixIt" className="logo" />

					<img
						src={MenuIcon}
						alt="Menu-Icon"
						className="menuBtn hidden"
						onClick={() => {
							setToggle(!toggle);
						}}
					/>

					<div className="navLinks">
						<NavLink to="/" className="active">
							Home
						</NavLink>
						<NavLink to="/about-us">About Us</NavLink>
						<NavLink to="/blog">Blog</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</div>

					<ul className={`${!toggle ? 'hidden' : 'block'} sidebar`}>
						<NavLink to="/" className="active">
							Home
						</NavLink>
						<NavLink to="/about">About Us</NavLink>
						<NavLink to="/blog">Blog</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</ul>

					<div className="navButtons">
						<Link to="/login">
							<StyledTextButton>Login</StyledTextButton>
						</Link>
						<Link to="/signup">
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

	.sidebar {
		position: absolute;
		top: 70px;
		width: 200px;
		background: #f5f5f5;
		border-radius: 8px;
		box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.18);

		a {
			display: block;
			border: none;
			width: 100%;
			margin: 14px 0;
			padding: 6px 18px;
		}
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
