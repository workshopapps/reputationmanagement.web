import styled from 'styled-components';

export const styleClass = {
	input: 'w-full',
	inputLabel: 'md:w-1/4 font-semibold',
	inputGroup:
		'mb-6 flex flex-col md:flex-row gap-4 justify-between md:items-center',
	inputGroupRow: 'mb-6 flex gap-4 justify-between items-center',
	selectClass:
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
	inputCheckClass: 'mr-3',
	form: 'pt-4',
};

export const StyledTab = styled.div`
	max-width: 1040px;
	margin: 24px auto;

	input {
		border: 1px solid #d2d3d4;
		border-radius: 8px;
		padding: 0.5rem 1rem;
		outline: none;

		&:focus {
			border: 1px solid #4560d9;
		}
	}
	select {
		text-transform: capitalize;
	}
`;

export const StyledButtonOutline = styled.div`
	color: #233ba9;
	border: 1px solid #233ba9;
	padding: 10px 25px;
	border-radius: 3px;
	text-align: center;
	cursor: pointer;
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

export const StyledParent = styled.div`
	@media (max-width: 375px) {
		max-width: 327px;
	}
	@media (max-width: 320px) {
		max-width: 277px;
	}
`;

export const StyledText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.185rem;
	margin-bottom: 20px;
	border-bottom: 0.5px solid #6f7174a2;
`;
export const StyledHeader = styled.p`
	font-weight: 700;
	font-size: 28px;
	color: #2b2c34;
`;

export const StyledOptions = styled.ul`
	display: flex;
	gap: 1rem;

	@media screen and (max-width: 428px) {
		display: flex;
		overflow-x: scroll;
		max-width: 428px;

		&::-webkit-scrollbar {
			width: 0;
			display: none;
		}
	}
`;

export const StyledOption = styled.li`
	color: #787a7d;
	background: transparent;
	border: 0;
	padding-bottom: 10px;
	list-style: none;

	&.active-tab {
		border-bottom: 2px solid rgb(35, 59, 169);
		color: rgb(35, 59, 169);
	}
	&:hover {
		cursor: pointer;
	}
`;
