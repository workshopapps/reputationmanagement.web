import Api from './axios';
import Cookies from 'js-cookie';

const useAccessToken = () => {
	const refresh = async () => {
		const response = await Api.get('/api/refresh', {
			withCredentials: true,
		});
		Cookies.set('reputeAccessToken', response?.data);
		return 'accessToken reset!!';
	};
	return refresh;
};
export default useAccessToken;
