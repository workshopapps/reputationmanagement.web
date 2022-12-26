import { NavLink } from "react-router-dom"
import { StyledSidebar } from "../../components/Styles/SideBar.styled"
import logo from '../../assets/images/repute_logo.svg';
import { ClientIcon, DashboardIcon , LawyerIcon, RequestIcon, SignoutIcon} from "../../components/Dashboard/Icons";
import LogoutConfirmationModal from "../../modal/logoutConfirmationModal";
import useLogoutConfirmation from "../../hooks/useLogoutConfirmation";
import closeBtn from '../../assets/images/img/x_icon.svg';

const AdminSideBar = (props) => {
    const { isShowing, toggle } = useLogoutConfirmation();
    return(
        <StyledSidebar className={props.className}>
        <div>
            <img src={closeBtn} alt="" onClick={props.closeMenuHandler} />
            <NavLink to="/" className="logo">
                <img src={logo} alt="" />
            </NavLink>
        </div>

        <section>
            <ul>
                <li>
                    <NavLink to="/admin/">
                        <DashboardIcon />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/requests">
                        <RequestIcon />
                        Requests
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/clients">
                        <ClientIcon />
                        Clients
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/lawyers">
                        <LawyerIcon />
                        Lawyers
                    </NavLink>
                </li>
            </ul>

            <ul>
                {/* <li>
                    <NavLink to="/settings">
                        <SettingsIcon />
                        Settings
                    </NavLink>
                </li> */}
                <li>
                    <button onClick={toggle}>
                        <SignoutIcon />
                        Signout
                    </button>
                </li>
            </ul>
        </section>

        <LogoutConfirmationModal isShowing={isShowing} hide={toggle} />
    </StyledSidebar>
    )
}
export default AdminSideBar;