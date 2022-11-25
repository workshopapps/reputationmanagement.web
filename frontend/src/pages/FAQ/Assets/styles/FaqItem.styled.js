import styled from 'styled-components';

export const FaqWraper = styled.div.attrs((props) => ({
	className: props.className,
}))`
	&.faq.open .faq-question {
		margin-bottom: 20px;
	}

	&.faq.open .faq-answer {
		max-height: 1000px;
		opacity: 1;
	}

	&.faq.open .faq-question .arrow-down {
		transform: translateY(-50%) rotate(180deg);
	}

	display: flex;
	flex-direction: column;
	border: 1px solid #eaecf0;
	border-radius: 8px;
	padding: 20px;
	cursor: pointer;
	&:hover {
		// background-color: #233BA9;
		transition: all 0.5s ease-out;
	}

	h2 {
		font-size: 28px;
		font-weight: 700;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	p {
		font-weight: 400;
		font-size: 22px;
		line-height: 150%;
		color: #4b515d;
	}

	@media screen and (max-width: 425px) {
		padding: 12px;

		h2 {
			font-size: 24px;
		}

		p {
			font-size: 18px;
		}
	}
`;

export const FaqQuestion = styled.div.attrs((props) => ({
	className: props.className,
}))`
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: all 0.4s ease;

	@media screen and (max-width: 425px) {
	}
`;

export const FaqArrowDown = styled.div.attrs((props) => ({
	className: props.className,
}))`
	transition: all 0.2s ease;
	width: 32px;
	height: 32px;

	transform: translateY(-50%);
`;

export const FaqAnswer = styled.div.attrs((props) => ({
	className: props.className,
}))`
	border-top: 1px solid #98a2b3;
	opacity: 0;
	max-height: 0;
	overflow-y: hidden;
	transition: all 0.4s ease;
	padding-top: 20px;
`;
