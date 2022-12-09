import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import DataBlog from '../../pages/Blog/data';
import useAppContext from '../../hooks/useAppContext';


const Filter = ({filterItem, setItem}) => {
	const [isNavLocation, setIsNavLocation] = useState(false);
	const { item } = useAppContext();

	return (
		<FilterMain>
			<div className={isNavLocation ? 'menu-responsive' : 'menu-desktop'}>
				<h1>Filter by Topic:</h1>
				<ul >
					<li onClick={() => setItem(item)}>
						
						All
						
						</li>
					<li  onClick={() => filterItem("Glassdoor Review")}>Glassdoor Review</li>
					<li onClick={() => filterItem("Google Review")}>Google Review</li>
					<li onClick={() => filterItem("Reddit")}>Reddit</li>
					<li onClick={() => filterItem("Reputation Management")}>Reputation Management</li>
					<li onClick={() => filterItem("Reviews")}>Reviews</li>
					<li onClick={() => filterItem("Social Media")}>Social Media</li>
				</ul>
			</div>

			<ResponsiveMenu
				onClick={() => {
					setIsNavLocation(!isNavLocation);
				}}
			>
				Filter by Topic <FaChevronDown className="filt-icon" />
			</ResponsiveMenu>
		</FilterMain>
	);
};

export default Filter;


const FilterMain = styled.div`
	position: relative;

	.menu-desktop {
		width: 220px;
		height: 322px;

		h1 {
			color: #2b2c34;
			font-size: 28px;
			font-weight: 700;
			margin-bottom: 16px;
		}

		ul {
			list-style: none;

			li {
				color: #2b2c34;
				font-size: 16px;
				font-weight: 400;
				margin-bottom: 16px;
				transition: 0.5s;

				&:nth-child(1) {
					color: blue;
				}

				&:hover {
					cursor: pointer;
					color: blue;
				}
			}
		}
		@media (max-width: 850px) {
			display: none;
		}
	}

	.menu-responsive {
		list-style: none;

		li {
			color: #2b2c34;
			font-size: 16px;
			font-weight: 400;
			margin-bottom: 16px;
			transition: 0.5s;

			&:nth-child(1) {
				color: blue;
			}

			&:hover {
				cursor: pointer;
				color: blue;
			}
		}
	}
`;

const ResponsiveMenu = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px 12px;
	width: 170px;
	background-color: #eef1fc;
	margin-bottom: 40px;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 600;

	.filt-icon {
		margin-left: 5px;
	}

	&:hover {
		cursor: pointer;
	}

	@media (min-width: 851px) {
		display: none;
	}
`;
