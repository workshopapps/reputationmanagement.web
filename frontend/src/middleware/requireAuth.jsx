import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const RequireAuth = () => {
    const { auth } = useAuthContext();
    const location = useLocation();

    return (
        auth
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace={true} />
    );
}

export default RequireAuth;