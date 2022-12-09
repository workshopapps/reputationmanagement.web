import styled from "styled-components";

const DeleteRequestModal = (props) => {
    const setDeleteModalActive = props.setDeleteModalActive
    const handleDelete = props.handleDelete
    return(
        <StyledOverlay>
            <div className="delete-request-modal">
                <h3>Are you sure you want to delete this request?</h3>
                <div className="buttons">
                    <button className="delete" onClick={() => handleDelete()}>
                        Delete
                    </button>
                    <button className="cancel" onClick={() => setDeleteModalActive(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </StyledOverlay>
    )
}
export default DeleteRequestModal;

export const StyledOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #1111114D;
    display: flex;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 9;
    .delete-request-modal{
        background-color: #ffffff;
        height: 407px;
        width: 732px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3{
            font-family: Lato;
            font-size: 32px;
            font-weight: 700;
            line-height: 35px;
            letter-spacing: 0em;
            text-align: center;
            max-width: 364px;
            color: #2B2C34;
        }
    }
    .buttons{
        display: flex;
        gap: 70px;
        font-family: Lato;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #ffffff;
        margin-top: 62px;
        .delete{
            height: 48px;
            width: 143px;
            border-radius: 4px;
            background-color: #F04438;
        }
        .cancel{
            height: 48px;
            width: 143px;
            border-radius: 4px;
            background-color: #233BA9;         
        }
    }
`; 