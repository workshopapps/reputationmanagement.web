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
	const [accessibility, setAccessibility] = useState({});
	const [notification, setNotification] = useState({});
	const [currentEmail, setCurrentEmail] = useState('');
	const [user, setUser] = useState({});

	useEffect(() => {
		// Get current user details
		ApiPrivate.get('/auth/details').then((res) => {
			setUser(res.data);
			setCurrentEmail(res.data.email);
		});
		// Get current user accessibility settings
		ApiPrivate.get('/customer/accessibility').then((res) => {
			setAccessibility(res.data);
		});
		// Get current user notification settings
		ApiPrivate.get('/notification_settings').then((res) => {
			setNotification(res.data);
		});
	}, [ApiPrivate]);

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

			{tab === 1 && (
				<Accounts user={user} setUser={setUser} currentEmail={currentEmail} />
			)}
			{tab === 2 && (
				<Preferences
					accessibility={accessibility}
					setAccessibility={setAccessibility}
				/>
			)}
			{tab === 3 && (
				<Notifications
					notification={notification}
					setNotification={setNotification}
				/>
			)}
			{tab === 4 && <Security />}
		</StyledParent>
	);
}
