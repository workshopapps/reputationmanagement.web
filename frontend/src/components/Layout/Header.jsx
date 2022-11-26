import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import MenuIcon from '../../assets/images/menuIcon.png';
import { StyledButton, StyledTextButton } from '../Styles/Body/Button.styled';
import { StyledContainer } from '../Styles/Body/Container.styled';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const location = useLocation();
	const currentRoute = location.pathname;
	const router = useNavigate();
	return (
		<header style={{ width: '100vw', position: 'fixed', top: '0', backgroundColor: '#ffffff', zIndex: '5' }}>
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
						<NavLink to="/" className={currentRoute === '/' ? 'active' : ''}>
							Home
						</NavLink>
						<NavLink to="/about-us" className={currentRoute === '/about-us' ? 'active' : ''}>About Us</NavLink>
						<NavLink to="/blog" className={currentRoute === '/blog' ? 'active' : ''}>Blog</NavLink>
						<NavLink to="/contact" className={currentRoute === '/contact' ? 'active' : ''}>Contact</NavLink>
						{/* <NavLink to="/dashboard" className={currentRoute === '/dashboard' ? 'active' : ''}>Dashboard</NavLink> */}
					</div>

					<ul className={`${!toggle ? 'hidden' : 'block'} sidebar`}>
						<NavLink to="/" className={currentRoute === '/' ? 'active' : ''}>
							Home
						</NavLink>
						<NavLink to="/about" className={currentRoute === '/about' ? 'active' : ''}>About Us</NavLink>
						<NavLink to="/blog" className={currentRoute === '/blog' ? 'active' : ''}>Blog</NavLink>
						<NavLink to="/contact" className={currentRoute === '/contact' ? 'active' : ''}>Contact</NavLink>
						<StyledNavButton onClick={() => router('/login')}>Login</StyledNavButton>
						<StyledNavButton onClick={() => router('/signup')}>Register</StyledNavButton>
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
const StyledNavButton = styled.button`
	background: #233BA9;
    padding: 10px 40px;
    border-radius: 6px;
    color: #fff;
    border: 1px #233BA9 solid;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
	margin: 14px 0;
	margin-left: 18px;
`;
const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 24px;
	position: relative;
	z-index: 10;
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
	@media screen and (max-width: 875px) {
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
		transition: all ease-in-out 0.5s;
	}

	&:hover {
		color: #233ba9;
	}
`;

export default Header;
