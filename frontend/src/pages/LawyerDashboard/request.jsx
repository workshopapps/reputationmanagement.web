import { useCallback, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { TableContainer } from "../../components/Dashboard/Styles/Dashboard.styled";
import { LawyerTableData } from "../../components/Dashboard/TableData";
import Sidebarr from "../../components/LawyerDashboard/Sidebarr";
import useAppContext from "../../hooks/useAppContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import ARROW_DOWN from './arrow-down.svg';
import ModalLayout from '../../layout/modalLayout'

const Requests = () => {
    const username = localStorage.getItem('auth')
    const [ showPendingRequests, setShowPendingRequests ] = useState(false);
    const [ showMyRequests, setShowMyRequests ] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [ claimedReviews, setClaimedReviews ] = useState([])
	const { setRequestFailed, setErrMessage } = useAppContext();

	const ApiPrivate = useAxiosPrivate();

	const fetchDetails = useCallback(async() => {
		try{
			const response = await ApiPrivate.get('/lawyer/PendingReview')
			setTickets(response?.data)
			console.log(response)
		}
		catch(err){
			if ( err?.response?.status ){
				setErrMessage('Shey you be lawyer ni')
				setRequestFailed(true)
			}
			console.log(err)

		}
	},[ ApiPrivate, setErrMessage, setRequestFailed ])

	const fetchMyDetails = async() => {
		try{
			const response = await ApiPrivate.get('/lawyer/GetClaimedReviews')
			setClaimedReviews(response?.data)
			console.log(response)
		}
		catch(err){
			if ( err?.response?.status ){
				setErrMessage('Shey you be lawyer ni')
				setRequestFailed(true)
			}
			console.log(err)
		}
	}

	useEffect(() => {
		fetchDetails()
        fetchMyDetails();
	},[])

    return(
        <div className="requests">
            <Sidebarr/>
            <StyledRequest>
                <p className="username">Hi,{username}</p>
                <h2>Requests</h2>
                <div className="my-tickets tickets" onClick={() => setShowPendingRequests(!showPendingRequests)}>
                    <div className="title">
                        <h3>My Tickets</h3>
                        <img src={ARROW_DOWN} alt="" className={showPendingRequests ? 'rotate' : ''} />
                    </div>
                    {
                        showPendingRequests && 
                        <TableContainer>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Priority</th>
                                        <th>Ticket Name</th>
                                        <th>Status</th>
                                        <th>Last Updated</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {tickets.length >= 1 && (
                                    <tbody>
                                        {claimedReviews ?
                                            claimedReviews.map((data, index) => {
                                                return (
                                                <LawyerTableData  id={data.reviewId} ticketName={data.complainerName} lastUpdated={data.updatedAt} priority={data.priority} status={data.status} key={index} no={index}
                                                    
                                                />
                                                )
                                            })
                                            :
                                            ''
                                        }
                                    </tbody>
                                )}
                            </TableContainer>
                    }
                </div>
                <div className="claimed-tickets tickets" onClick={() => setShowMyRequests(!showMyRequests)}>
                    <div className="title">
                        <h3>Open Tickets</h3>
                        <img src={ARROW_DOWN} alt="" className={showMyRequests ? 'rotate' : ''} />
                    </div>
                    {
                        showMyRequests && 
                        <TableContainer>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Priority</th>
                                        <th>Ticket Name</th>
                                        <th>Status</th>
                                        <th>Last Updated</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {tickets.length >= 1 && (
                                    <tbody>
                                        {tickets ?
                                            tickets.map((data, index) => {
                                                return (
                                                <LawyerTableData  id={data.reviewId} ticketName={data.complainerName} lastUpdated={data.updatedAt} priority={data.priority} status={data.status} key={index} no={index}
                                                    
                                                />
                                                )
                                            })
                                            :
                                            ''
                                        }
                                    </tbody>
                                )}
                            </TableContainer>
                    }
                </div>
            </StyledRequest>
        </div>
    )
}
export const StyledRequest = styled.div`
    margin-left: 280px;
    padding: 20px;
    .username{
        text-align: right;
        margin-bottom: 40px;
    }
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
    .tickets{
        width: 100%;
        border-bottom: 1px solid #E4E4E5;
        display: flex;
        flex-direction: column;
        .title{
            display: flex;
            justify-content: space-between;
            padding: 20px;
        }
        h3{
            font-family: Lato;
            font-size: 22px;
            font-weight: 600;
            line-height: 33px;
            letter-spacing: 0em;
            text-align: left;
            color: #2D1717;
        }
        img{
            transition: all ease-in-out 0.2s;
        }
        .rotate{
            transform: rotate(180deg);
            transition: all ease-in-out 0.2s;
        }
    }
`;
export default Requests;