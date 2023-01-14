import { useEffect } from 'react';
import { ApiPrivate } from '../api/axios';
import Cookies from 'js-cookie';
import updateAccessToken from "../api/updateAccessToken";

const useAxiosPrivate = () => {
	const accessToken = Cookies.get('reputeAccessToken');

	useEffect(() => {
		const requestInterceptor = ApiPrivate.interceptors.request.use(
			(config) => {
				if (!config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${accessToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);
		const responseInterceptor = ApiPrivate.interceptors.response.use(
		    response => response,
		    async (error) => {
		        const prevReq = error.config
		        if ( error?.response?.status === 403 && !prevReq.sent){
		            prevReq.sent = true
		            const response = await updateAccessToken();
					const newAccessToken = Cookies.get('reputeAccessToken')
		            prevReq.headers['Authorization'] = `Bearer ${newAccessToken}`
		            return ApiPrivate(prevReq)
		        }
		        return Promise.reject(error)
		    }
		)
		return () => {
			ApiPrivate.interceptors.request.eject(requestInterceptor);
			ApiPrivate.interceptors.response.eject(responseInterceptor)
		};
	}, [accessToken]);
	return ApiPrivate;
};
export default useAxiosPrivate;
