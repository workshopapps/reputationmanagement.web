import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/repute_logo.svg';
import MenuIcon from '../../assets/images/Dashboard/menu.svg';
import close from '../../assets/images/close.svg';
import { StyledButton, StyledTextButton } from '../Styles/Body/Button.styled';
import { StyledContainer } from '../Styles/Body/Container.styled';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const location = useLocation();
	const currentRoute = location.pathname;
	const router = useNavigate();

	const loggedin = localStorage.getItem('auth');

	return (
		<header
			style={{
				width: '100vw',
				position: 'fixed',
				top: '0',
				backgroundColor: '#ffffff',
				zIndex: '10',
			}}
		>
			<StyledContainer>
				<StyledNav className="">
					<img src={Logo} alt="Repute" className="logo" />

					<img
						src={!toggle ? MenuIcon : close}
						alt="Menu-Icon"
						className="menuBtn hidden"
						onClick={() => {
							setToggle(!toggle);
						}}
					/>

					<div className="navLinks">
						<NavLink to="/" className={currentRoute === '/' ? 'active' : ''}>
							Home
						</NavLink>
						<NavLink
							to="/about-us"
							className={currentRoute === '/about-us' ? 'active' : ''}
						>
							About Us
						</NavLink>
						<NavLink
							to="/contact"
							className={currentRoute === '/contact' ? 'active' : ''}
						>
							FAQ
						</NavLink>
					</div>

					<ul className={`${!toggle ? 'hidden' : 'block'} sidebar`}>
						<div className="mbmenu">
							<NavLink to="/" className={currentRoute === '/' ? 'active' : ''}>
								Home
							</NavLink>
							<NavLink
								to="/about-us"
								className={currentRoute === '/about-us' ? 'active' : ''}
							>
								About Us
							</NavLink>

							<NavLink
								to="/contact"
								className={currentRoute === '/contact' ? 'active' : ''}
							>
								FAQ
							</NavLink>

							{loggedin ? (
								<StyledNavButton onClick={() => router('/dashboard')}>
									Dashboard
								</StyledNavButton>
							) : (
								<>
									<StyledNavButton onClick={() => router('/login')}>
										Login
									</StyledNavButton>

									<StyledNavButton onClick={() => router('/signup')}>
										Sign up
									</StyledNavButton>
								</>
							)}
						</div>
					</ul>

					{loggedin ? (
						<div className="navButtons">
							<Link to="/dashboard">
								<StyledButton>Dashboard</StyledButton>
							</Link>
						</div>
					) : (
						<>
							<div className="navButtons">
								<Link to="/login">
									<StyledTextButton>Login</StyledTextButton>
								</Link>

								<Link to="/signup">
									<StyledButton>Sign up</StyledButton>
								</Link>
							</div>
						</>
					)}
				</StyledNav>
			</StyledContainer>
		</header>
	);
};
const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 20px;
	padding-bottom: 20px;
	// padding: 20px 24px;
	position: relative;
	z-index: 10;

	img {
		width: 12%;
	}
	a {
		text-decoration: none;
	}

	.sidebar {
		position: absolute;
		top: 89px;
		width: 100%;
		padding-bottom: 25px;
		padding-top: 10px;
		background: #fff;
		// background: #f5f5f5;
		// border-radius: 0 0 8px 8px;
		// box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
		-webkit-box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
		-moz-box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
		@media screen and (min-width: 886px) {
			display: none;
		}

		a {
			display: block;
			border: none;
			width: 100%;
			margin: 14px 0;
			padding: 6px 18px;
		}
		.mbmenu {
			text-align: center;
		}
	}
	.navButtons {
		display: flex;
	}
	@media screen and (max-width: 900px) {
		.navButtons {
			display: none;
		}
	}
	@media screen and (max-width: 875px) {
		.logo {
			display: block;
			margin: auto;
			width: 25%;
		}
		.menuBtn {
			display: block;
			position: absolute;
			left: 10px;
			margin-bottom: 5px;
			cursor: pointer;
			width: 7%;
		}
		.navLinks {
			display: none;
		}
	}
	@media screen and (max-width: 884px) {
		.logo {
			width: 22%;
		}
	}
	@media screen and (max-width: 428px) {
		.logo {
			width: 38%;
		}
		.menuBtn{
			width: 10%;
		}
	}
`;
const StyledNavButton = styled.button`
	background: #233ba9;
	padding: 10px 40px;
	border-radius: 6px;
	color: #fff;
	border: 1px #233ba9 solid;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	margin: 14px 0;
	margin-left: 18px;
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
		transition: all ease-in-out 0.5s;
	}

	&:hover {
		color: #233ba9;
	}
`;

export default Header;
