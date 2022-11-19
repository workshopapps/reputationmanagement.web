import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import MenuIcon from '../../assets/images/menuIcon.png';

const Header = () => {
	return (
		<StyledNav className="">
			<img src={Logo} alt="FixIt" className="logo" />

			<img src={MenuIcon} alt="Menu-Icon" className="menuBtn" />

			<div className="navLinks">
				<NavLink to="/" className="active">
					Home
				</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/contact">Contact</NavLink>
				<NavLink to="/dashboard">dashboard</NavLink>
			</div>

			<div className="navButtons">
				<NavButton to="/">Login</NavButton>
				<NavButton to="/">Register</NavButton>
			</div>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px;
	position: relative;

	a {
		text-decoration: none;
	}

	.menuBtn {
		display: none;
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
			left: 0;
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
		border-bottom: 2px solid #233ba9;
	}
`;

const NavButton = styled(Link)`
	padding: 6px;
`;

export default Header;
