import React, { useState } from 'react';
import styled from 'styled-components';
import Accounts from './Accounts';
import Notifications from './Notifications';
import Preferences from './Preferences';
import Privacy from './Privacy';


export default function Main() {
	const StyledParent = styled.div`
		width: 80%;
		margin: 0 30px;

		@media (min-width: 800px) {
		}
	`;

	const StyledText = styled.div`
		display: flex;
		flex-direction: column;
		gap: 2.185rem;
		margin-bottom: 20px;
		border-bottom: 0.5px solid #6f7174a2;
	`;
	const StyledHeader = styled.h2`
		font-weight: 700;
		font-size: 28px;
		color: #2b2c34;
	`;

	const StyledOptions = styled.ul`
		display: flex;
		gap: 1rem;
	`;

	const StyledOption = styled.li`
		color: #787a7d;
		background: transparent;
		border: 0;
		padding-bottom: 10px;
		list-style: none;

		&.active-tab {
			border-bottom: 2px solid rgb(35, 59, 169);
			color: rgb(35, 59, 169);
		}
		&:hover{
			cursor: pointer;
		}
	`;

	const [tab, setTab] = useState(1);

	const toggleTab = (index) => {
		setTab(index);
	};

	return (
		<StyledParent>
			<div>
				<StyledText>
					<StyledHeader>Settings</StyledHeader>
					<StyledOptions>
						<StyledOption
							className={tab === 1 ? 'active-tab' : ''}
							onClick={() => toggleTab(1)}
						>
							Accounts
						</StyledOption>

						<StyledOption
							className={tab === 2 ? 'active-tab' : ''}
							onClick={() => toggleTab(2)}
						>
							Preferences
						</StyledOption>

						<StyledOption
							className={tab === 3 ? 'active-tab' : ''}
							onClick={() => toggleTab(3)}
						>
							Notifications
						</StyledOption>

						<StyledOption
							className={tab === 4 ? 'active-tab' : ''}
							onClick={() => toggleTab(4)}
						>
							Privacy & Security
						</StyledOption>
					</StyledOptions>
				</StyledText>
			</div>

			{tab === 1 && <Accounts />}
			{tab === 2 && <Preferences />}
			{tab === 3 && <Notifications />}
			{tab === 4 && <Privacy />}
		</StyledParent>
	);
}
