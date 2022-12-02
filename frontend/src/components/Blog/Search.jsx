import React from 'react';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';

const StyledForm = styled.form`
	border: 1px solid #e4e4e5;
	border-radius: 8px;
	width: 40%;
	height: 48px;
	margin: 30px auto;
	padding: 10px auto;
	display: flex;
	align-items: center;
	> svg {
		font-size: 1.3rem;
		color: #8e9093;
		margin: 0 10px;
	}

	@media (max-width: 1200px) {
		width: 70%;
	}
	@media (max-width: 400px) {
		width: 90%;
	}
`;

const StyledInput = styled.input`
	border: none;
	outline: none;
	width: 92%;
	height: 100%;
`;

const Search = () => {
	const [userInput, setUserInput] = useState('');
	return (
		<>
			<StyledForm>
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
