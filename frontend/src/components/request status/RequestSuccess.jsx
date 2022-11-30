import React, { useEffect } from 'react';
import styled from 'styled-components';
import {REQUEST_SUCCESS_ICON} from '../../assets/image'
import useAppContext from '../../hooks/useAppContext';

const RequestSuccess = () => {
    const { requestSuccess, setRequestSuccess, successMessage } = useAppContext();

    useEffect(()=> {
        const dissapear = setTimeout(() => {
            setRequestSuccess(false)
        }, 2000) 
        return () => {
            clearTimeout(dissapear)
        }
    })
    return(
        <StyledRequestSuccess className={ requestSuccess ? "on-screen" : "off-screen" }>
            <img src={REQUEST_SUCCESS_ICON} alt="" />
            <h4>{successMessage}</h4>
        </StyledRequestSuccess>
    )
}
export default RequestSuccess;

const StyledRequestSuccess = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    top: 90px;
    right: 20px;
    padding: 7px 10px;
    border-radius: 7px;
    background-color: hsl(140,40%,55%);
    gap: 10px;
    transition: all ease 0.5s;
    z-index: 4;
    img{
        width: 50px;
        height: 50px;
    }
    h4{
        font-size: 20px;
        color: #ffffff;
    }
`;