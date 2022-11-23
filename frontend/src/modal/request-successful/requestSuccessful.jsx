import React from 'react';
import { useState } from 'react';
import {
	StyledButtonWrapper,
	StyledOverlay,
	StyledProgressBar,
	StyledProgressBarCaption,
	StyledSuccessfulRequest,
} from './styles';
import { DONE_ICON } from '../../assets/image';
import { useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';
import { useNavigate } from 'react-router-dom';

const RequestSuccessful = () => {
    const [ requestState, setRequestState ] = useState(0);
    const { requestSuccessfulModalActive, setRequestSuccessfulModalActive } = useAppContext();
	const router = useNavigate();

	const width = window.innerWidth;

	useEffect(() => {
		width < 767 && requestSuccessfulModalActive && router('/request-successful')
	},[width, requestSuccessfulModalActive, router, setRequestSuccessfulModalActive ])
    useEffect(() => {
        setRequestState(0)
    },[])
    useEffect(() => {
        const requestTimeout = () => {
            setTimeout(() => {
                setRequestState(requestState + 1)
            },1200)
        } 
        requestSuccessfulModalActive && requestState < 5 && requestTimeout();
        return() => {
            clearTimeout(requestTimeout)
        }
    },[requestSuccessfulModalActive, requestState])

	return (
		<StyledOverlay>
			<StyledSuccessfulRequest>
				<h2 className={requestState < 5 ? 'none' : ''}>Request Successful</h2>
				<p>
					Your request has been recieved and our agents are working on it
					already.
				</p>
				<StyledProgressBar>
					<div className={requestState > 0 ? 'active' : ''}>
						{requestState > 1 ? <img src={DONE_ICON} alt="" /> : <p>1</p>}
					</div>
					<span className={requestState > 1 ? 'finished' : ''}></span>
					<div className={requestState > 1 ? 'active' : ''}>
						{requestState > 2 ? <img src={DONE_ICON} alt="" /> : <p>2</p>}
					</div>
					<span className={requestState > 2 ? 'finished' : ''}></span>
					<div className={requestState > 2 ? 'active' : ''}>
						{requestState > 3 ? <img src={DONE_ICON} alt="" /> : <p>3</p>}
					</div>
					<span className={requestState > 3 ? 'finished' : ''}></span>
					<div className={requestState > 3 ? 'active' : ''}>
						{requestState > 4 ? <img src={DONE_ICON} alt="" /> : <p>4</p>}
					</div>
				</StyledProgressBar>
				<StyledProgressBarCaption>
					<p className={requestState > 0 ? 'finished' : 0}>New Request</p>
					<p className={requestState > 1 ? 'finished' : 0}>Pending</p>
					<p className={requestState > 2 ? 'finished' : 0}>Under review</p>
					<p className={requestState > 3 ? 'finished' : 0}>Resolved</p>
				</StyledProgressBarCaption>
				<StyledButtonWrapper>
					<button
						id="request"
						onClick={() => { router('/request-form'); setRequestSuccessfulModalActive(false)}}
					>
						New Request
					</button>
					<button id="dashboard" onClick={() => { router('/dashboard'); setRequestSuccessfulModalActive(false)}}>Dashboard</button>
				</StyledButtonWrapper>
			</StyledSuccessfulRequest>
		</StyledOverlay>
	);
};
export default RequestSuccessful;
