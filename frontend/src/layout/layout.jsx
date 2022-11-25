import { useEffect } from "react";
import styled from "styled-components";
import RequestFailed from "../components/request status/requestFailed";
import RequestSuccess from "../components/request status/RequestSuccess";
import useAppContext from '../hooks/useAppContext'

const Layout = ({children}) => {
    const { setRequestSuccess, requestSuccess, setRequestFailed, requestFailed, errMessage, successMessage } = useAppContext();
    useEffect(() => {
        console.log(requestSuccess)
    },[requestSuccess])
    return(
        <StyledLayout>
            <RequestSuccess setRequestSuccess={setRequestSuccess} message={successMessage} requestSuccess={requestSuccess}/>
			<RequestFailed message={errMessage} setRequestFailed={setRequestFailed} requestFailed={requestFailed}/>
            {children}
        </StyledLayout>
    )
}
export default Layout;

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