import React from 'react';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';

const StyledForm = styled.form`
	border: 1px solid #bcbdbe;
	border-radius: 8px;
	width: 40%;
	height: 48px;
	margin: 30px auto;
	padding: 10px auto;
	display: flex;
	align-items: center;
	> svg {
		font-size: 2rem;
		color: #757577;
		margin: 0 10px;
	}

	@media (max-width: 1200px) {
		width: 70%;
	}
	@media (max-width: 520px) {
		width: 90%;
	}
`;

const StyledInput = styled.input`
	border: none;
	outline: none;
	width: 92%;
	height: 100%;
`;

const Search = (props) => {
	const [userInput, setUserInput] = useState('');
	return (
		<>
			<StyledForm onSubmit={(e) => e.preventDefault()}>
				<CiSearch />
				<StyledInput
					type="text"
					placeholder="Search for anything..."
					onChange={(e) => {
						setUserInput(e.target.value);
					}}
					value={userInput}
				/>
			</StyledForm>
		</>
	);
};

export default Search;
