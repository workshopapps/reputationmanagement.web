import React from 'react';
import styled from 'styled-components';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
	const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

	const nextPage = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};
	return (
		<StyledNav>
			<ul className="pagination justify-content-center">
				<li className="page-item">
					<button className="page-link" onClick={prevPage} href="#">
						&#10094;
					</button>
				</li>
				{pageNumbers.map((pgNumber) => (
					<li
						key={pgNumber}
						className={`page-item ${currentPage === pgNumber ? 'active' : ''} `}
					>
						<button
							onClick={() => setCurrentPage(pgNumber)}
							className="page-link"
							href="#"
						>
							{pgNumber}
						</button>
					</li>
				))}
				<li className="page-item">
					<button className="page-link" onClick={nextPage} href="#">
						&#10095;
					</button>
				</li>
			</ul>
		</StyledNav>
	);
};

export default Pagination;

const StyledNav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	ul {
		display: flex;
		margin-top: 70px;
		margin-bottom: 70px;

		li {
			border: 1px solid #233ba9;

			color: #233ba9;

			margin-right: 24px;
			transition: 0.5s;

			&:hover {
				cursor: pointer;
				background-color: #233ba9;
				color: white;
			}

			&:active {
				background-color: #233ba9;
			}

			button {
				width: 48px;
				height: 40px;
				display: inline-flex;
				justify-content: center;
				align-items: center;

				&:active {
					color: blue;
				}
			}
		}

		.active {
			background-color: #233ba9;
			color: white;
		}
	}
`;
