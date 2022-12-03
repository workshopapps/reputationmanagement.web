import styled from 'styled-components';

export const styleClass = {
	input: 'w-full px-3 py-1.5 border border-gray-300 rounded',
	inputLabel: 'md:w-1/4 font-semibold',
	inputGroup:
		'mt-6 flex flex-col md:flex-row gap-4 justify-between md:items-center',
	inputGroupRow: 'mt-6 flex gap-4 justify-between items-center',
	selectClass:
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
	inputCheckClass: 'mr-3',
};

export const StyledTab = styled.div``;

export const StyledButtonOutline = styled.button`
	color: #233ba9;
	border: 1px solid #233ba9;
	padding: 10px 25px;
	border-radius: 3px;
	text-align: center;
`;

export const StyledButton = styled.button`
	background-color: #233ba9;
	color: #ffffff;
	padding: 10px 35px;
	border-radius: 3px;
	border: none;
	text-align: center;
`;

export const StyledButtonText = styled.button`
	color: #233ba9;
	padding: 10px;
	margin: 0 35px;
	border-radius: 3px;
	border: none;
	text-align: center;
`;
