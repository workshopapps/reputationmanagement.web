import { useEffect, useState } from "react";
import styled from "styled-components";
import AdminSideBar from "./adminSideBar";
import SEARCH_ICON from './assets/search-icon.svg';
import DELETE_ICON from './assets/trash-icon.svg';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { DeleteUserModal } from "../../modal/deleteRequestModal";
import useAppContext from "../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

const LawyersPage = () => {
    const [ clients, setClients ] = useState([])
    const [openMenu, setOpenMenu] = useState(false);
    const [ search, setSearch ] = useState('')
    const [ userId, setUserId ] = useState(0)
    const ApiPrivate = useAxiosPrivate();
    const [ deleteRequestModalActive, setDeleteRequestModalActive ] = useState(false)
	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();

    const fetchRequests = async() => {
        try{
            const response = await ApiPrivate.get('/api/admin/getusers')
            setClients(response?.data)
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
            const response = await ApiPrivate.delete(`/api/admin/deleteuser?id=${userId}`)
            fetchRequests();
            setDeleteRequestModalActive(false);
            setSuccessMessage('User deleted successfully')
            setRequestSuccess(true)
        }
        catch(err){
            console.log(err)
            setErrMessage('Unable to delete user')
            setRequestFailed(true)
        }
    }
    return(
        <StyledClients>
            {deleteRequestModalActive && <DeleteUserModal setDeleteModalActive={setDeleteRequestModalActive} handleDelete={() =>handleDelete()}/>}
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
                    <h2>Clients</h2>
                    <div className="client__main__table">
                        <div className="table-head">
                            <p>Lawyer Name</p>
                            <p>Email</p>
                            <p>Actions</p>
                        </div>
                        {
                            clients
                            ?
                            clients
                                    .filter((data) => {
                                        if (search === '') {
                                            return data;
                                        } else if (
                                            data.businessEntityName
                                                .toLowerCase()
                                                .includes(search.toLowerCase())
                                        ) {
                                            return data;
                                        }
                                    })
                                    .map((data) => {
                                        return <LawyersCard setDeleteRequestModalActive={setDeleteRequestModalActive} setUserId={setUserId} key={data.reviewId} reviewId={data.reviewId} clientName={data.businessEntityName} email={data.email} />
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
export default LawyersPage;

const LawyersCard = (props) => {
    const setDeleteRequestModalActive = props.setDeleteRequestModalActive;
    const setUserId = props.setUserId
    return(
        <div className="client-card">
            <h4>{props.clientName}</h4>
            <h4>{props.email}</h4>
            <div className="actions">
                <img src={DELETE_ICON} onClick={() => { setDeleteRequestModalActive(true); setUserId(props.email)} } alt=""/>
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
                    width: 40%;
                }
                :nth-child(2){
                    width: 40%;
                }
                :nth-child(3){
                    width: 20%;
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
                    width: 40%;
                }
                :nth-child(2){
                    width: 40%;
                }
            }
            div{
                display: flex;
                gap: 16px;
                justify-content: center;
                width: 60px;
                :nth-child(5){
                    width: 20%;
                }
            }
        }
    }
`;