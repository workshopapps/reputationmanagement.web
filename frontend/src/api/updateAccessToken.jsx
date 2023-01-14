import Api from './axios';
import Cookies from 'js-cookie';

const updateAccessToken = () => {
	const refreshToken = Cookies.get('reputeRefreshToken')
	const accessToken = Cookies.get('accessRefreshToken')
	const refresh = async () => {
		const response = await Api.post('/api/token/refresh', {
			refreshtoken: refreshToken,
			accessToken: accessToken,
		});
		Cookies.set('reputeAccessToken', response?.data);
		return response?.data;
	};
	return refresh;
};
export default updateAccessToken;
