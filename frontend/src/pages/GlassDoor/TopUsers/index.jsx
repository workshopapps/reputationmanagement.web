import React from 'react';
import { topUsers } from '../data';
import { TopUsersContainer, Wrapper } from './TopUsers.style';

const TopUsers = () => {
	return (
		<Wrapper>
			<h1>Used and loved by 1M users across 199 countries</h1>
			<TopUsersContainer>
				{topUsers.map((topUser) => {
					return (
						<div className="img__container" key={topUser.id}>
							<img src={topUser.image} alt="company logo" />
						</div>
					);
				})}
			</TopUsersContainer>
		</Wrapper>
	);
};

export default TopUsers;
