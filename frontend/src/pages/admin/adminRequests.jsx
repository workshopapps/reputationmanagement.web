import { useEffect, useState } from "react";
import styled from "styled-components";
import AdminSideBar from "./adminSideBar";
import SEARCH_ICON from './assets/search-icon.svg';
import DELETE_ICON from './assets/trash-icon.svg';
import EDIT_ICON from './assets/edit-icon.svg';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import DeleteRequestModal from "../../modal/deleteRequestModal";
import useAppContext from "../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

const AdminRequestsPage = () => {
    const [ requests, setRequests ] = useState([])
    const [openMenu, setOpenMenu] = useState(false);
    const [ search, setSearch ] = useState('')
    const ApiPrivate = useAxiosPrivate();
    const [ reviewId, setReviewId ] = useState(0)
    const [ deleteRequestModalActive, setDeleteRequestModalActive ] = useState(false)
	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();

    const fetchRequests = async() => {
        try{
            const response = await ApiPrivate.get('/api/admin/reviews?pageNumber=0&pageSize=100')
            setRequests(response?.data)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        fetchRequests()
    },[])

    useEffect(() => {
        const fetchAgain = setInterval(() => {
            fetchRequests()
        },5000)
        return () => {
            clearInterval(fetchAgain)
        }
    },[])

    const handleDelete = async() => {
        try{
            const response = await ApiPrivate.delete(`/api/admin/${reviewId}/delete`)
            fetchRequests();
            setDeleteRequestModalActive(false);
            setSuccessMessage('Request deleted successfully')
            setRequestSuccess(true)
        }
        catch(err){
            console.log(err)
            setErrMessage('Unable to delete request')
            setRequestFailed(true)
        }
    }
    return(
        <StyledClients>
            {deleteRequestModalActive && <DeleteRequestModal setDeleteModalActive={setDeleteRequestModalActive} handleDelete={() =>handleDelete()}/>}
			<AdminSideBar
				className={`${openMenu ? 'open' : ''}`}
				closeMenuHandler={() => setOpenMenu(false)}
			/>
            <div className="clients-wrapper">
                <div className="search-bar">
                    <img src={SEARCH_ICON} alt=""/>
                    <input 
                        type="text"
                        placeholder="Search for anything....."
                        onChange={(e) => setSearch(e.target.value)}
                        value={search || ''}
                    />
                </div>
                <div className="client__main">
                    <h2>Requests</h2>
                    <div className="client__main__table">
                        <div className="table-head">
                            <p>Client Name</p>
                            <p>Business Type</p>
                            <p>Email</p>
                            <p>Last Updated</p>
                            <p>Actions</p>
                        </div>
                        {
                            requests
                            ?
                            requests
                                    .filter((data) => {
                                        if (search === '') {
                                            return data;
                                        } else if (
                                            data.websiteName
                                                .toLowerCase()
                                                .includes(search.toLowerCase())
                                        ) {
                                            return data;
                                        }
                                    })
                                    .map((data) => {
                                        return <RequestCard setDeleteRequestModalActive={setDeleteRequestModalActive} setReviewId={setReviewId} key={data.reviewId} reviewId={data.reviewId} clientName={data.websiteName} businessType={data.businessType} email={data.email} requestDate={data.lastUpdated.substring(0,10)}/>
                                    })
                            :
                            <h4>No requests found</h4>
                        }
                        {/* {
                            requests
                                ?
                                requests.map((data) => {
                                        return <ClientsCard key={data.reviewId} clientName={data.websiteName} businessType={data.businessType} email={data.email} contact="08071442123"/>
                                })
                                :
                                <h4>No requests found</h4>
                        } */}
                    </div>
                </div>
            </div>
        </StyledClients>
    )
}
export default AdminRequestsPage;

const RequestCard = (props) => {
    const setReviewId = props.setReviewId
    const setDeleteRequestModalActive = props.setDeleteRequestModalActive;
    const router = useNavigate();
    return(
        <div className="client-card">
            <h4>{props.clientName}</h4>
            <h4>{props.businessType}</h4>
            <h4>{props.email}</h4>
            <h4>{props.requestDate}</h4>
            <div className="actions">
                <img src={DELETE_ICON} onClick={() => { setDeleteRequestModalActive(true); setReviewId(props.reviewId)}} alt=""/>
                <img src={EDIT_ICON} onClick={() => router(`/admin/request-details?requestId=${props.reviewId}`)} alt=""/>
            </div>
        </div>
    )
}
const StyledClients = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 280px auto;

	grid-template-areas:
		'sidebar nav'
		'sidebar main';

	@media (max-width: 1140px) {
		grid-template-areas:
			'nav nav'
			'main main';
	}
    .clients-wrapper{
        grid-area: main;
        padding-left: 3rem;
        padding-right: 3rem;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 20px;
    }
    .search-bar{
        height: 48px;
        width: 720px;
        border-radius: 8px;
        border: 1px solid #E4E4E5;
        display: flex;
        align-items: center;
        padding-left: 12px;
        gap: 16px;
        input{
            width: 100%;
            outline none;
            height: 100%;
        }
    }
    .client__main{
        h2{
            font-family: Lato;
            font-size: 28px;
            font-weight: 700;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            margin-top: 36px;
        }
        &__table{
            width: 100%;
            max-width: 1064px;
            margin-top: 36px;
        }
        .table-head{
            display: flex;
            padding: 20px;
            background-color: #E4E4E5;
            p{
                :nth-child(1){
                    width: 25%;
                }
                :nth-child(2){
                    width: 20%;
                }
                :nth-child(3){
                    width: 25%;
                }
                :nth-child(4){
                    width: 20%;
                }
                :nth-child(5){
                    width: 10%;
                }
            }
            p{
                font-family: Lato;
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: left;
                color: #2B2C34;
            }
        }
        .client-card{
            display: flex;
            width: 100%;
            padding: 20px;
            border-bottom: 1px solid #E4E4E5;
            h4{
                font-family: Lato;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: left;
                color: #2B2C34;
            }
            h4{
                :nth-child(1){
                    width: 25%;
                }
                :nth-child(2){
                    width: 20%;
                }
                :nth-child(3){
                    width: 25%;
                }
                :nth-child(4){
                    width: 20%;
                }
            }
            div{
                display: flex;
                gap: 16px;
                :nth-child(5){
                    width: 10%;
                }
            }
        }
    }
`;