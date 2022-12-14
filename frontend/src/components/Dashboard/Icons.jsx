import React from 'react';
import { useLocation } from 'react-router-dom';

export const HomeIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.0427 3.15016L10.0431 3.14985C11.1273 2.27904 12.8675 2.28414 13.968 3.16073C13.9681 3.16084 13.9682 3.16094 13.9684 3.16105L20.514 8.39756C20.5146 8.39802 20.5152 8.39849 20.5157 8.39895C20.893 8.70711 21.2196 9.18942 21.4304 9.74099C21.641 10.2922 21.7196 10.8699 21.6462 11.351L20.3873 18.8845C20.3872 18.885 20.3872 18.8855 20.3871 18.8859C20.1374 20.3188 18.7432 21.5 17.3 21.5H6.69996C5.23549 21.5 3.8725 20.3476 3.62294 18.8965C3.62288 18.8961 3.62282 18.8958 3.62276 18.8955L2.36313 11.3576L2.36293 11.3565C2.28079 10.8718 2.35452 10.293 2.56465 9.74192C2.77476 9.19094 3.10548 8.70909 3.4918 8.40086L3.49267 8.40016L10.0427 3.15016ZM12 19.25C12.6861 19.25 13.25 18.6862 13.25 18V15C13.25 14.3139 12.6861 13.75 12 13.75C11.3138 13.75 10.75 14.3139 10.75 15V18C10.75 18.6862 11.3138 19.25 12 19.25Z"
				fill=""
				stroke=""
			/>
		</svg>
	);
};

export const ClientIcon = (props) => {
	return(
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className='path' d="M9.15957 10.87C9.05957 10.86 8.93957 10.86 8.82957 10.87C6.44957 10.79 4.55957 8.84 4.55957 6.44C4.55957 3.99 6.53957 2 8.99957 2C11.4496 2 13.4396 3.99 13.4396 6.44C13.4296 8.84 11.5396 10.79 9.15957 10.87Z" fill="" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			<path className='path' d="M16.4103 4C18.3503 4 19.9103 5.57 19.9103 7.5C19.9103 9.39 18.4103 10.93 16.5403 11C16.4603 10.99 16.3703 10.99 16.2803 11" fill=""/>
			<path className='path' d="M16.4103 4C18.3503 4 19.9103 5.57 19.9103 7.5C19.9103 9.39 18.4103 10.93 16.5403 11C16.4603 10.99 16.3703 10.99 16.2803 11" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			<path className='path' d="M4.15973 14.56C1.73973 16.18 1.73973 18.82 4.15973 20.43C6.90973 22.27 11.4197 22.27 14.1697 20.43C16.5897 18.81 16.5897 16.17 14.1697 14.56C11.4297 12.73 6.91973 12.73 4.15973 14.56Z" fill="" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			<path className='path' d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" fill=""/>
			<path className='path' d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	)
}

export const LawyerIcon = () => {
	return(
		<svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13.625 22.8666H2.375C1.75368 22.8666 1.25 22.3629 1.25 21.7416V19.4916C1.42184 10.9791 14.5793 10.9588 14.75 19.4917C14.75 19.4916 14.75 21.7416 14.75 21.7416C14.75 22.3629 14.2463 22.8666 13.625 22.8666Z" fill=""/>
			<path d="M13.625 23.2429H2.375C1.54791 23.2429 0.875 22.57 0.875 21.7429V19.4929C1.09641 10.4767 14.9037 10.4551 15.125 19.493C15.125 19.4929 15.125 21.7429 15.125 21.7429C15.125 22.57 14.4521 23.2429 13.625 23.2429ZM7.625 13.4929C4.31665 13.4929 1.625 16.1845 1.625 19.4929V21.7429C1.625 22.1565 1.96136 22.4929 2.375 22.4929H13.625C14.0386 22.4929 14.375 22.1565 14.375 21.7429V19.4929C14.3846 15.853 11.1939 13.1697 7.625 13.4929Z" fill=""/>
			<path d="M10.25 18.7422L8 21.3672L5.75 18.7422L7.25 14.2422H8.75L10.25 18.7422Z" fill="white"/>
			<path d="M7.99998 21.7422C7.89048 21.7422 7.78647 21.6944 7.71525 21.6113L5.46525 18.9863C5.37955 18.8863 5.35264 18.7486 5.3942 18.6235L6.8942 14.1235C6.94529 13.9705 7.08848 13.8672 7.24998 13.8672H8.74998C8.91147 13.8672 9.05466 13.9705 9.10575 14.1235L10.6057 18.6235C10.6473 18.7486 10.6204 18.8863 10.5347 18.9863L8.28471 21.6113C8.21348 21.6944 8.10947 21.7422 7.99998 21.7422ZM6.17295 18.6594L7.99998 20.791L9.827 18.6594L8.47971 14.6172H7.52024L6.17295 18.6594H6.17295Z" fill=""/>
			<path d="M8 14.6172C7.17157 14.6172 6.5 13.9456 6.5 13.1172V11.9922H9.5V13.1172C9.5 13.9456 8.82843 14.6172 8 14.6172Z" fill="white"/>
			<path d="M8 14.9922C6.96618 14.9922 6.125 14.151 6.125 13.1172V11.9922C6.125 11.7851 6.29291 11.6172 6.5 11.6172H9.5C9.70709 11.6172 9.875 11.7851 9.875 11.9922V13.1172C9.875 14.151 9.03381 14.9922 8 14.9922ZM6.875 12.3672V13.1172C6.875 13.7375 7.37964 14.2422 8 14.2422C8.62036 14.2422 9.125 13.7375 9.125 13.1172V12.3672H6.875Z" fill=""/>
			<path d="M13.6097 6.35214C13.0892 5.77993 11.8004 4.95481 10.9247 4.73589C9.47265 5.89214 6.5266 5.89206 5.07466 4.73589C4.1989 4.95481 2.9101 5.77993 2.38965 6.35214C3.07414 -0.588679 12.9277 -0.583583 13.6097 6.35214Z" fill=""/>
			<path d="M13.6098 6.72673C13.5129 6.72673 13.4177 6.68938 13.3459 6.61833C12.6826 5.96239 11.8691 5.44644 10.9864 5.1491C9.36641 6.26519 6.63275 6.26516 5.01277 5.1491C4.13032 5.44627 3.31678 5.96216 2.65328 6.61833C2.5425 6.72801 2.37533 6.75768 2.2336 6.69267C2.09169 6.62786 2.0049 6.48192 2.01552 6.32646C2.10818 4.9561 2.678 3.64873 3.61989 2.64513C7.12479 -1.17306 13.6672 1.14539 13.9836 6.32654C14.0022 6.53743 13.8207 6.73063 13.6098 6.72673ZM10.9245 4.36046C11.6968 4.5349 12.4297 4.94555 13.0756 5.40471C11.634 0.207469 4.3632 0.210994 2.92354 5.40471C3.5379 4.95323 4.24044 4.59538 4.9659 4.37657C5.07833 4.34252 5.20064 4.36339 5.29549 4.43242C6.70002 5.50394 9.29918 5.50393 10.7037 4.43238C10.7685 4.38518 10.8461 4.36046 10.9245 4.36046L10.9245 4.36046Z" fill="#A5A6A8"/>
			<path d="M13.6255 6.74259C13.6255 9.84758 11.1055 12.3676 8.00047 12.3676C4.76021 12.3814 2.14935 9.58382 2.39046 6.35258C2.91091 5.78036 4.19974 4.95524 5.07547 4.73633C6.52747 5.89257 9.47353 5.89249 10.9255 4.73633C11.8012 4.95525 13.09 5.78036 13.6105 6.35258C13.6217 6.48009 13.6255 6.61133 13.6255 6.74259Z" fill="white"/>
			<path d="M7.99959 12.7425C4.54441 12.7573 1.7541 9.76477 2.01608 6.31919C2.02395 6.23095 2.06295 6.14819 2.12594 6.08593C2.9162 5.30325 3.90346 4.69833 4.9659 4.37738C5.07833 4.34332 5.20065 4.36419 5.29549 4.43322C6.01162 4.95507 6.97201 5.24255 7.9996 5.24255C9.02719 5.24255 9.98757 4.95507 10.7037 4.43322C10.7985 4.36419 10.9207 4.34331 11.0333 4.37737C12.096 4.69851 13.0831 5.30346 13.8733 6.08593C13.9362 6.14818 13.9752 6.23095 13.9831 6.3192C14.2448 9.76475 11.455 12.7573 7.9996 12.7425H7.99959ZM2.75417 6.52154C2.6227 9.49022 5.0272 11.9999 7.9996 11.9925C10.9719 12 13.3767 9.49015 13.245 6.52154C12.6019 5.91298 11.8244 5.43191 10.9864 5.14989C9.36642 6.26598 6.63276 6.26596 5.01278 5.14989C4.17499 5.43177 3.3974 5.91273 2.75417 6.52154Z" fill="#A5A6A8"/>
			<path d="M2.37542 6.7424C1.66309 6.66784 2.09542 5.65311 2.64808 6.09476C2.89795 6.32429 2.69757 6.75003 2.37542 6.7424ZM13.6144 6.73874C13.2961 6.74492 13.1034 6.31155 13.3453 6.08725C13.8973 5.63284 14.3223 6.67203 13.6144 6.73874Z" fill=""/>
		</svg>
	)
}
export const RequestIcon = (props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75ZM17 8.75H7C6.59 8.75 6.25 8.41 6.25 8C6.25 7.59 6.59 7.25 7 7.25H17C17.41 7.25 17.75 7.59 17.75 8C17.75 8.41 17.41 8.75 17 8.75Z"
				fill={props.fill}
			/>
		</svg>
	);
};
export const DashboardIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.5401 8.80965C19.1748 8.80965 20.5001 7.48441 20.5001 5.84965C20.5001 4.21489 19.1748 2.88965 17.5401 2.88965C15.9053 2.88965 14.5801 4.21489 14.5801 5.84965C14.5801 7.48441 15.9053 8.80965 17.5401 8.80965Z"
				fill=""
			/>
			<path
				d="M6.46 8.80965C8.09476 8.80965 9.42 7.48441 9.42 5.84965C9.42 4.21489 8.09476 2.88965 6.46 2.88965C4.82524 2.88965 3.5 4.21489 3.5 5.84965C3.5 7.48441 4.82524 8.80965 6.46 8.80965Z"
				fill=""
			/>
			<path
				d="M17.5401 21.1104C19.1748 21.1104 20.5001 19.7852 20.5001 18.1504C20.5001 16.5157 19.1748 15.1904 17.5401 15.1904C15.9053 15.1904 14.5801 16.5157 14.5801 18.1504C14.5801 19.7852 15.9053 21.1104 17.5401 21.1104Z"
				fill=""
			/>
			<path
				d="M6.46 21.1104C8.09476 21.1104 9.42 19.7852 9.42 18.1504C9.42 16.5157 8.09476 15.1904 6.46 15.1904C4.82524 15.1904 3.5 16.5157 3.5 18.1504C3.5 19.7852 4.82524 21.1104 6.46 21.1104Z"
				fill=""
			/>
		</svg>
	);
};

export const ProfileIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
				fill=""
				stroke=""
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.27148 18.346C4.27148 18.346 6.50048 15.5 12.0005 15.5C17.5005 15.5 19.7305 18.346 19.7305 18.346M12.0005 12C12.7961 12 13.5592 11.6839 14.1218 11.1213C14.6844 10.5587 15.0005 9.79565 15.0005 9C15.0005 8.20435 14.6844 7.44129 14.1218 6.87868C13.5592 6.31607 12.7961 6 12.0005 6C11.2048 6 10.4418 6.31607 9.87916 6.87868C9.31655 7.44129 9.00048 8.20435 9.00048 9C9.00048 9.79565 9.31655 10.5587 9.87916 11.1213C10.4418 11.6839 11.2048 12 12.0005 12V12Z"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const SettingsIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.1 9.21945C18.29 9.21945 17.55 7.93945 18.45 6.36945C18.97 5.45945 18.66 4.29945 17.75 3.77945L16.02 2.78945C15.23 2.31945 14.21 2.59945 13.74 3.38945L13.63 3.57945C12.73 5.14945 11.25 5.14945 10.34 3.57945L10.23 3.38945C9.78 2.59945 8.76 2.31945 7.97 2.78945L6.24 3.77945C5.33 4.29945 5.02 5.46945 5.54 6.37945C6.45 7.93945 5.71 9.21945 3.9 9.21945C2.86 9.21945 2 10.0694 2 11.1194V12.8794C2 13.9194 2.85 14.7794 3.9 14.7794C5.71 14.7794 6.45 16.0594 5.54 17.6294C5.02 18.5394 5.33 19.6994 6.24 20.2194L7.97 21.2094C8.76 21.6794 9.78 21.3995 10.25 20.6094L10.36 20.4194C11.26 18.8494 12.74 18.8494 13.65 20.4194L13.76 20.6094C14.23 21.3995 15.25 21.6794 16.04 21.2094L17.77 20.2194C18.68 19.6994 18.99 18.5294 18.47 17.6294C17.56 16.0594 18.3 14.7794 20.11 14.7794C21.15 14.7794 22.01 13.9294 22.01 12.8794V11.1194C22 10.0794 21.15 9.21945 20.1 9.21945ZM12 15.2494C10.21 15.2494 8.75 13.7894 8.75 11.9994C8.75 10.2094 10.21 8.74945 12 8.74945C13.79 8.74945 15.25 10.2094 15.25 11.9994C15.25 13.7894 13.79 15.2494 12 15.2494Z"
				fill=""
			/>
		</svg>
	);
};

export const SignoutIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402"
				stroke="#6F7174"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.0001 12H3.62012"
				stroke="#6F7174"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.85 8.65039L2.5 12.0004L5.85 15.3504"
				stroke="#6F7174"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
