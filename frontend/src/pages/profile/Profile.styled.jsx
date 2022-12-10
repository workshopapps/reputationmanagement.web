import styled from 'styled-components';

const BodyWrapper = styled.section`
	position: relative;
	font-family: 'Lato', sans-serif;

	display: grid !important;
	/* gap: 15rem; */
	grid-template-columns: 280px auto !important;
	position: relative;

	grid-template-areas:
		'sidebar nav'
		'sidebar main';

	@media (max-width: 1140px) {
		grid-template-areas:
			'nav nav'
			'main main';
	}
`;
const WrapNav = styled.div`
	grid-area: nav;
	@media (min-width: 1440px) {
		& > * {
			display: none;
			width: 100%;
		}
		display: none;
		width: 100vw;
	}
`;
const PageBody = styled.div`
	@media (max-width: 480px) {
		width: 100vw;
		h1 {
			font-size: 18px;
		}
	}
	@media (min-width: 481px) {
		/* width: 80vw; */
	}
	/* width: 80vw; */
	box-sizing: border-box;
	* {
		padding: 0;
		margin: 0;
		color: #2b2c34;
	}

	h1 {
		font-size: 2rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		color: #233ba9;
	}

	h6 {
		color: #2b2c3499;
		font-weight: 600;
		line-height: 19px;
		font-size: 16px;
	}

	p {
		line-height: 24.64px;
	}
`;
const WrapRHS = styled.div`
	grid-area: main;
	@media (min-width: 1020px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;
const Header = styled.div`
	@media (max-width: 480px) {
		padding: 1em 0.5em;
	}
	padding: 2em 2em 2em 4em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const HeaderLHS = styled.div`
	@media (max-width: 480px) {
		gap: 0.5em;
		font-size: 16px;
	}

	@media (max-width: 768px) {
		gap: 0.75em;
	}

	display: flex;
	justify-content: left;
	align-items: center;
	gap: 2em;
	font-size: 24px;
`;
const HeaderRHS = styled.div`
	@media (max-width: 480px) {
		display: none;
	}

	@media (max-width: 1440px) {
		gap: 1rem;
		display: none;

		div {
			img {
				width: 2rem;
			}
		}
	}
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2.5em;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 3rem;
			border-radius: 100%;
			margin-right: 0.3em;
		}
	}
`;
const ContentContainer = styled.div`
	@media (max-width: 480px) {
		padding: 2em 0.5em;
	}
	background-color: #f2f3f3;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	border-radius: 10px;

	min-height: 594px;
	padding: 2em 2em 2em 4em;
`;
const DescriptionContainer = styled.div`
	@media (max-width: 768px) {
		p {
			margin-top: 0.5em !important;
			width: 100% !important;
		}
	}
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 6em;

	p {
		margin-top: 1.7em;
		width: 60%;
	}
`;
const DescriptionHeaderText = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	gap: 1em;
`;
const DescriptionHeaderCon = styled.div`
	@media (max-width: 480px) {
		gap: 0.3em;
		img {
			width: 1rem;
		}
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
`;
const AboutBizHeader = styled.h6`
	@media (max-width: 768px) {
		display: block;
		margin-top: 1.5em;
	}
	display: none;
`;
const EditBtn = styled.button`
	@media (max-width: 480px) {
		padding: 0.75em 0.5em;
		font-size: 12px;
		img {
			width: 1em;
		}
	}
	padding: 0.5em 0.75em;
	background: #f16f04;
	color: #fff;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.2em;

	span {
		color: #fff;
	}
`;
const BusinessInfoContainer = styled.div`
	@media (max-width: 480px) {
		h3 {
			display: none;
		}
	}

	width: 100%;
	margin-bottom: 2.5em;
	h3 {
		margin-bottom: 1.5em;
	}
`;
const BusinessInfo = styled.div`
	@media (max-width: 480px) {
		display: flex;
		flex-direction: column;
		gap: 0.7em;
		& > * {
			margin-top: 0.5em;
			padding-top: 0.7em;
			border-top: 1px solid #2b2c344d;
		}
	}
	width: inherit;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: minmax(50px, auto);
	gap: 1.7em;

	p {
		margin-top: 0.5em;
	}
`;

export {
	BodyWrapper,
	WrapNav,
	WrapRHS,
	PageBody,
	Header,
	HeaderLHS,
	HeaderRHS,
	ContentContainer,
	DescriptionContainer,
	DescriptionHeaderCon,
	DescriptionHeaderText,
	AboutBizHeader,
	EditBtn,
	BusinessInfoContainer,
	BusinessInfo,
};
