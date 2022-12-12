import styled from 'styled-components';
import { INVALID_FIELD_ICON } from '../../assets/image';

const ErrorMessage = (props) => {
	return (
		<StyledErrorMessage>
			<img src={INVALID_FIELD_ICON} alt="" />
			<p>{props.error}</p>
		</StyledErrorMessage>
	);
};
export default ErrorMessage;

const StyledErrorMessage = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 5px;
	margin-top: -10px;
	p {
		color: #d8340f !important;
		font-size: 16px !important;
		line-height: 20px !important;
		margin-top: 0 !important;
	}
	img{
		margin-bottom: 28px;
	}
	
`;
