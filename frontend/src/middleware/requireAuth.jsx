import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
	const auth = localStorage.getItem('auth');
	const location = useLocation();

	return auth ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace={true} />
	);
};

export const RequireLawyerAuth = () => {
	const user_type = localStorage.getItem('user_type');
	const location = useLocation();

	return user_type === 'lawyer' ? (
		<Outlet />
	) : (
		<Navigate to="/lawyer-login" state={{ from: location }} replace={true} />
	);
};

export const RequireBusinessAuth = () => {
	const user_type = localStorage.getItem('user_type');
	const location = useLocation();

	return user_type === 'business' ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace={true} />
	);
};

export const RequireAdminAuth = () => {
	const user_type = localStorage.getItem('user_type');
	const location = useLocation();

	return user_type === 'admin' ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace={true} />
	);
};


export default RequireAuth;
