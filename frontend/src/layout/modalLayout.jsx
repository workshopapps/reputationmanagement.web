import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import RequestFailed from "../components/request status/requestFailed";
import RequestSuccess from "../components/request status/RequestSuccess";
import useAppContext from '../hooks/useAppContext'
import RequestSuccessful from "../modal/request-successful/requestSuccessful";

const ModalLayout = ({children}) => {
    const { setRequestSuccess, requestSuccess, setRequestFailed, requestFailed, errMessage, successMessage, requestSuccessfulModalActive } = useAppContext();
    return(
        <StyledLayout>
            { requestSuccessfulModalActive &&  <RequestSuccessful/>}
            <RequestSuccess setRequestSuccess={setRequestSuccess} message={successMessage} requestSuccess={requestSuccess}/>
			<RequestFailed message={errMessage} setRequestFailed={setRequestFailed} requestFailed={requestFailed}/>
            <Outlet/>
        </StyledLayout>
    )
}
export default ModalLayout;

const StyledLayout = styled.div`
.off-screen{
    opacity: 0;
    visibility: hidden;
    position: absolute;
    transform: translateX(20px);
    transition: 0.5s ease;
}
.on-screen{
    opacity: 1;
    visibility: visible;
    transform: translateX(-20px);
    transition: 0.5s ease;
    @media(max-width: 430px){
        max-width: 80%;
    }
}
`;