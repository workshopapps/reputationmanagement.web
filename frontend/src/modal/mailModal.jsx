import { useState } from "react";
import styled from "styled-components";
import { StyledOverlay } from "./request-successful/styles";
import useAppContext from '../hooks/useAppContext'
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

const MailModal = (props) => {
    const [ loading, setLoading ] = useState(false)
    const { setMailModalActive, setErrMessage, setRequestFailed, setRequestSuccess, setSuccessMessage, } = useAppContext();
    const ApiPrivate = useAxiosPrivate();
    const [ email, setEmail ] = useState('Hello,I am the lawyer that has claimed your request from repute,Below are terms to continue with this request')
    const router = useNavigate();
    const requestId = props.requestId;

    const changeRequestStatus = async() => {
		try{
			const response = await ApiPrivate.patch(`/lawyer/review/${requestId}`,[
				{
					operationType: 2,
					path: '/status',
					op: 'replace',
					value: 2,
				}]
			)
			console.log(response)
		}
		catch(err){
			console.log(err)
		}
	}

    const handleSubmit = async() => {
        setLoading(true)
        try{
            const response = await ApiPrivate.post('/lawyer/email/create',{
                emailToId: props.userEmail,
                emailBody: email,
            })
            setLoading(false)
            console.log(response)
            setSuccessMessage('Mal sent successfully');
            setRequestSuccess(true)
            changeRequestStatus();
            setTimeout(() => {
                setMailModalActive(false);
                router('/requests')
            },2000)
        }
        catch(err) {
            setLoading(false)
            setErrMessage('Mail not sent')
            setRequestFailed(true)
            console.log(err)
        }
    }
    return(
        <StyledOverlay>
            <StyledMailModal>
                <h3 onClick={() => setMailModalActive(false)}>X</h3>
                <h2>Send a mail to this {props.userEmail}</h2>
                <textarea defaultValue={email} onChange={(e) => setEmail(e.target.value)}>
                </textarea>
                <button className="submit" onClick={() => handleSubmit()}>
                    {
                        !loading
                            ?
                        "Send"
                        :
                        <div className="loading"></div>
                    }
                </button>
            </StyledMailModal>
        </StyledOverlay>
    )
}

const StyledMailModal = styled.div`
    background-color: #ffffff;
    width: 700px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    h2{
        font-family: Lato;
        font-size: 28px;
        font-weight: 700;
        line-height: 42px;
        letter-spacing: 0em;
        text-align: left;
        color: #292D32;
        margin-bottom: 50px;
    }
    h3{
        font-family: Lato;
        font-size: 28px;
        font-weight: 700;
        line-height: 42px;
        letter-spacing: 0em;
        text-align: right;
        width: 90%;
        color: #292D32;
        margin-bottom: 20px;
    }
    textarea{
        width: 90%;
        border: 1px solid grey;
        resize: none;
        font-family: lato;
        padding: 20px;
        height: 400px;
        border-radius: 10px;
    }
    .submit{
        width: 220px;
        height: 59px;
        background: #233ba9;
        border-radius: 4px;
        padding: 16px 24px;
        font-size: 18px;
        border: none;
        color: white;
        margin-top: 40px;
        transition: 0.5s;

        &:hover {
            background: #0a1d88;
        }
        .loading{
            width: 20px;
            height: 20px;
            border: 2px solid #FFF;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
            margin: 0 !important;
            padding: 10px;
            @keyframes rotation {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        }
    }
`;
export default MailModal;