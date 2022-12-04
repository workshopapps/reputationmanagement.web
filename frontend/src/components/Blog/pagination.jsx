import styled from 'styled-components';

const Pagination = () => {
	return (
		<>
			<StyledSection>
				<div>
					<div>&#10094; </div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>...</div>
					<div>&#10095;</div>
				</div>
			</StyledSection>
		</>
	);
};

export default Pagination;

const StyledSection = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 100px;
	margin-bottom: 100px;
	div {
		display: flex;
		div {
			border: 1px solid #233ba9;
			width: 48px;
			height: 40px;
			color: #233ba9;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			margin-right: 24px;
            transition: 0.5s;

            &:nth-child(2) {
                background-color: #233ba9;
                color: white;
            }

            &:hover {
                cursor: pointer;
                background-color: #233ba9;
                color: white;
            }

            @media (max-width:520px) {
                width: 38px;
			height: 40px;
            margin-right: 14px;
        
    }
		}
	}
`;
