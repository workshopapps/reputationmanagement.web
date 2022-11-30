import styled from "styled-components";

const LogoutConfirmationModal = () => {
    return(
        <StyledLogoutConfirmationModalLayout>
            <StyledLogoutConfirmationModal>
                <h2>Are you sure You want to log out?</h2>
                <div className="button-wrapper">
                    <button>Return</button>
                    <button>Log out</button>
                </div>
            </StyledLogoutConfirmationModal>
        </StyledLogoutConfirmationModalLayout>
    )
}
const StyledLogoutConfirmationModalLayout = styled.div`
    width: 100%
    position: fixed,
    height: 100%,
    background-color: rgba( 0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledLogoutConfirmationModal = styled.div`
    color: #ffffff;
    width: 500px;
    height: 400px;
`;
export default LogoutConfirmationModal;