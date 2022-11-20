import React from 'react';
import { useState } from 'react';
import {
	StyledButtonWrapper,
	StyledOverlay,
	StyledProgressBar,
	StyledSuccessfulRequest,
} from './styles';
import { DONE_ICON } from '../../assets/image';
import { useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';

const RequestSuccessful = () => {
    const [ requestState, setRequestState ] = useState(0);
    const { requestSuccessfulModalActive } = useAppContext();
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
				<StyledButtonWrapper>
					<button
						id="request"
						onClick={() => setRequestState(requestState + 1)}
					>
						New Request
					</button>
					<button id="dashboard">Dashboard</button>
				</StyledButtonWrapper>
			</StyledSuccessfulRequest>
		</StyledOverlay>
	);
};
export default RequestSuccessful;
