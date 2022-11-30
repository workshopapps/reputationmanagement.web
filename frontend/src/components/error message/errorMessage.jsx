import styled from 'styled-components';
import {INVALID_FIELD_ICON} from '../../assets/image';

const ErrorMessage = (props) => {
    return(
        <StyledErrorMessage>
            <img src={INVALID_FIELD_ICON} alt="" />
            <p>{props.error}</p>
        </StyledErrorMessage>
    )
}
export default ErrorMessage;

const StyledErrorMessage = styled.div`
    display: flex ;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
    p{
        color: #D8340F !important;
        font-size: 16px !important;
        line-height: 20px !important;
        margin-top: 0 !important;
    }
`;