import React, { useEffect } from "react"
import styled from "styled-components";
import { WHITE_INFO_ICON } from "../../assets/image";
import useAppContext from '../../hooks/useAppContext'

const RequestFailed = (props) => {
    const { requestFailed, setRequestFailed, errMessage } = useAppContext();
    useEffect(()=> {
        const dissapear = setTimeout(() => {
            setRequestFailed(false)
        }, 2000) 
        return () => {
            clearTimeout(dissapear)
        }
    })
    return(
        <StyledRequestFailed className={ requestFailed ? "request-failed on-screen" : "request-failed off-screen"}>
            <img src={WHITE_INFO_ICON} alt=""/>
            <h4>{errMessage}</h4>
        </StyledRequestFailed>
    )
}
export default RequestFailed;

const StyledRequestFailed = styled.div`
    background-color: #D8340F;
    display: flex;
    position: fixed;
    align-items: center;
    top: 90px;
    right: 20px;
    padding: 7px 10px;
    border-radius: 7px;
    gap: 10px;
    transition: all ease 0.5s;
    z-index: 4;
    img{
        width: 30px;
        height: 30px;
    }
    h4{
        font-size: 20px !important;
        color: #ffffff !important;
    }
`;