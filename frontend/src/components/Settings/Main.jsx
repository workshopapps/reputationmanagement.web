import React, { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Accounts from './Accounts';
import Notifications from './Notifications';
import Preferences from './Preferences';
import Security from './Security';
import {
	StyledHeader,
	StyledOption,
	StyledOptions,
	StyledParent,
	StyledText,
} from './Settings.styled';

export default function Main() {
	const [tab, setTab] = useState(1);

	const toggleTab = (index) => {
		setTab(index);
	};

	const ApiPrivate = useAxiosPrivate();
	const [userLanguage, setUserLanguage] = useState('english');

	useEffect(() => {
		ApiPrivate.get('/customer/language').then((res) => {
			setUserLanguage(res.data);
		});
	}, []);

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
							Account
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
							Security
						</StyledOption>
					</StyledOptions>
				</StyledText>
			</div>

			{tab === 1 && <Accounts />}
			{tab === 2 && (
				<Preferences
					userLanguage={userLanguage}
					setUserLanguage={setUserLanguage}
				/>
			)}
			{tab === 3 && <Notifications />}
			{tab === 4 && <Security />}
		</StyledParent>
	);
}
