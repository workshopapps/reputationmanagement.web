import { useState } from 'react';
import Sidebar from '../Reusables/Sidebar';
import RequestNavbar from './RequestNavbar';
import { StyledSidebar } from '../Styles/SideBar.styled.js';
import {
    StyledDashboard,
    StyledContainer,
    CardContainer,
    InputContainer,
    TableContainer,
    Header,
    CardSemiWrapper,
} from '../Dashboard/Styles/Dashboard.styled';



function NewRequest() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <StyledDashboard>
            <Sidebar
                className={`${openMenu ? 'open' : ''}`}
                closeMenuHandler={() => setOpenMenu(false)}
            />


            <RequestNavbar openMenuHandler={() => setOpenMenu(true)} />



            <StyledContainer className=''>
                <div className='container max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4'>
                    <h2 className='font-bold text-2xl'>Request</h2>
                </div>
                <div className='container max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4'>
                    <h2 className='font-semibold text-base'>My Tickets</h2>
                </div>
            </StyledContainer>


        </StyledDashboard>
    )
}

export default NewRequest
