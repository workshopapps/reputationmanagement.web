import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Reusables/Sidebar";
import WebAppNav from "../components/Reusables/WebAppNav";

const BusinessDashboardLayout = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <StyledBusinessDashboardLayout>
            <Sidebar
				className={`${openMenu ? 'open' : ''}`}
				closeMenuHandler={() => setOpenMenu(false)}
			/>
            <WebAppNav openMenuHandler={() => setOpenMenu(true)} />
            <StyledDashboardContainer>
                {children}
            </StyledDashboardContainer>
        </StyledBusinessDashboardLayout>
    )
}
export default BusinessDashboardLayout;

const StyledBusinessDashboardLayout = styled.div`
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
`;

export const StyledDashboardContainer = styled.div`
	grid-area: main;
	padding-left: 3rem;
	padding-right: 3rem;

	@media (max-width: 820px) {
		padding-left: 21px;
		padding-right: 21px;
	}
`;