import { useState } from "react";
import styled from "styled-components";
import useAppContext from "../hooks/useAppContext";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import CLOSE from './close.svg';

const EditLawyerDetails = (props) => {
    const [ fullName, setFullName ] = useState(props.name);
    const [ email, setEmail ] = useState(props.email);
    const setEditUserActive = props.setEditUserActive;
    const ApiPrivate = useAxiosPrivate();
	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();

    const handleSubmit = async() => {
        try{
            const response = await ApiPrivate.patch(`/api/admin/UpdateUserAccount/${props.email}`,
            [
                {
                    operationType: 2,
                    path: '/email',
                    op: 'replace',
                    value: email,
                },
                {
                    operationType: 2,
                    path: '/fullName',
                    op: 'replace',
                    value: fullName,
                }
            ])
            console.log(response)
            setSuccessMessage('Lawyer details updated successfully')
            setRequestSuccess(true)
            setEditUserActive(false)
        }
        catch(err){
            console.log(err)
            setErrMessage("Couldn't update lawyer details")
            setRequestFailed(true)
            setEditUserActive(false)
        }
    }

    return(
        <StyledOverlay>
            <div className="styled-business-details">
                <div className="top">
                    <h4>Edit Info</h4>
                    <img onClick={() => setEditUserActive(false)} src={CLOSE} alt=""/>
                </div>
                <div className="main">
                    <div className="input-wrapper">
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label>Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="buttons">
                        <button className="save" onClick={() => handleSubmit()}>
                            Save
                        </button>
                        <button className="cancel" onClick={() => setEditUserActive(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </StyledOverlay>
    )
}
export default EditLawyerDetails;

const StyledOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #1111114d;
    display: flex;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 9;
    .styled-business-details{
        height: 437px;
        width: 553px;
        border-radius: 10px;
        background-color: #ffffff;
        .top{
            background: #F9F8FD;
            display: flex;
            padding: 18px 34px;
            align-items: center;
            justify-content: space-between;
            h4{
                font-family: Lato;
                font-size: 24px;
                font-weight: 600;
                line-height: 36px;
                letter-spacing: 0em;
                text-align: left;
                color: #4D5154;
            }
        }
        .main{
            input{
                height: 56px;
                width: 100%;
                border-radius: 8px;
                padding-left: 14px;
                border: 1px solid #D2D3D4;
                margin-top: 8px;
                outline: none;
            }
        }
        .input-wrapper{
            max-width: 496px;
            margin: 0 auto;
            margin-top: 15px;
            label{
                font-family: Lato;
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: left;

            }
        }
        .buttons{
            display: flex;
            gap: 94px;
            justify-content: center;
            font-family: Lato;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            margin-top: 53px;
            .save{
                height: 48px;
                width: 82px;
                border-radius: 4px;
                color: #ffffff;
                background-color: #2A47CB;
            }
            .cancel{
                height: 48px;
                width: 96px;
                border-radius: 4px;
                color: #F16F04;
            }
        }
    }
`;