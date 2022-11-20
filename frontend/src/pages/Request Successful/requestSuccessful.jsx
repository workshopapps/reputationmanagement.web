import { useEffect } from "react";
import { REQUEST_SUCCESSFUL } from "../../assets/image";
import Header from "../../components/Layout/Header";
import { StyledRequestSuccessfulSm } from "./styles";
import useAppContext from '../../hooks/useAppContext'

const RequestSuccessfulSm = () => {
    const { setRequestSuccessfulModalActive } = useAppContext();
    useEffect(() => {
        setRequestSuccessfulModalActive(false)
    },[])
    return(
        <StyledRequestSuccessfulSm>
            <Header/>
            <h2>Request Successful</h2>
            <p>Your request has been recieved and our agents are working on it already</p>
            <img src={REQUEST_SUCCESSFUL} alt=""/>
            <button>New Request</button>
        </StyledRequestSuccessfulSm>
    )
}
export default RequestSuccessfulSm;