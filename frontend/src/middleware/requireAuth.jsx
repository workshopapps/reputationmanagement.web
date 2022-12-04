import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
    const auth = localStorage.getItem('auth')
    console.log(auth)
    const location = useLocation();

    return (
        auth
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace={true} />
    );
}

export default RequireAuth;