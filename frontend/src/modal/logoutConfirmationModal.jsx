import styled from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/images/logOutConfirmation/signoutlogo.svg';
import Cookies from 'js-cookie';
//import Api from '../api/axios';

//const response =  Api.post('/auth/sign_in')

const handleLogout = () => {
	Cookies.set('reputeAccessToken')
	Cookies.remove('reputeAccessToken')
	localStorage.removeItem('auth')
	window.location.href = '/login';
	
};

const LogoutConfirmationModal = ({ isShowing, hide }) =>
	isShowing
		? ReactDOM.createPortal(
				<React.Fragment>
					<ModalOverlay className="modal-overlay" />
					<ModalWrapper
						className="modal-wrapper"
						aria-modal
						aria-hidden
						tabIndex={-1}
						role="dialog"
					>
						<div className="modal">
							<div className="modal-header">
								<button
									type="button"
									className="modal-close-button"
									data-dismiss="modal"
									aria-label="Close"
									onClick={hide}
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<ModalInner>
								<img src={logo} alt="Logo" />
								<h2>Sign Out</h2>
								<h6>Are you sure you want to sign out?</h6>
								<div>
									<button onClick={handleLogout}>Sign Out</button>

									<button onClick={hide}>Cancel</button>
								</div>
							</ModalInner>
						</div>
					</ModalWrapper>
				</React.Fragment>,
				document.body
		  )
		: null;

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1040;
	width: 100%;
	height: 100vh;
	background-color: #000;
	opacity: 0.5;
`;

const ModalInner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		max-height: 150px;
		height: 150px;

		@media (max-width: 500px) {
			height: 110px;
		}
	}

	h2 {
		font-weight: 600;
		margin-top: 25px;
		margin-bottom: 25px;
		font-size: 38px;

		@media (max-width: 500px) {
			margin-bottom: 20px;
			font-size: 28px;
		}
	}

	h6 {
		font-size: 16px;
		font-weight: 400;
		margin-bottom: 25px;
	}

	div {
		button:nth-child(1) {
			padding: 16px 24px;
			background-color: #f2f3f3;
			border-radius: 4px;
			color: #6f7174;
			margin-right: 70px;

            @media (max-width: 500px) {
				margin-right: 30px;
			}
		}

		button:nth-child(2) {
			padding: 16px 24px;
			border: 1px solid #ff8017;
			color: #ff8017;
			border-radius: 4px;
            @media (max-width: 500px) {
				padding: 13px 20px;
			}
		}

		button {
			@media (max-width: 500px) {
				padding: 13px 20px;
			}
		}
	}
`;

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1050;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	outline: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	.modal {
		z-index: 100;
		background: white;
		position: relative;
		margin: 1.75rem auto;
		border-radius: 10px;
		max-width: 700px;
		width: 700px;
		padding: 15px 0px 40px 0px;
		box-shadow: 79px 120px 58px rgba(0, 0, 0, 0.01),
			44px 68px 49px rgba(0, 0, 0, 0.05), 20px 30px 36px rgba(0, 0, 0, 0.09),
			5px 8px 20px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);

		@media (max-width: 700px) {
			width: 400px;
		}

		@media (max-width: 500px) {
			width: 300px;
		}
	}

	.modal-header {
		display: flex;
		justify-content: flex-end;
	}

	.modal-close-button {
		font-size: 1.7rem;
		font-weight: 700;
		line-height: 1;
		color: black;
		//opacity: .3;
		cursor: pointer;
		border: none;
	}

	button {
		font-size: 0.9rem;
		font-weight: 700;
		border: none;
		border-radius: 3px;
		padding: 0.3rem 1rem;
		margin-left: 0.5rem;
	}

	.button-default {
		background: #247ba0;
		color: #fff;
	}
`;

export default LogoutConfirmationModal;
