import React from 'react';
import {
	StyledFixHeader,
	StyledFixImg,
	StyledFixCenter,
	ImgsContainer,
	StyledFixBox,
	StyledColor,
	Plato,
	StyledColorBlue,
	StyledColorOrange,
	StyledFixp,
} from '../styled/Fix.styled';
import TrustImg from '../img/Trust.png';
import ProfessionalImg from '../img/Professionalism.png';
import Convenience from '../img/Convenience.png';


export default function Fix() {
	return (
		<div data-testid="fixit-element">
			<StyledFixHeader>
				Why Choose <StyledColorBlue> Fix</StyledColorBlue>
				<StyledColor>It</StyledColor>?
			</StyledFixHeader>
			<StyledFixBox>
				<StyledFixCenter>
					<ImgsContainer>
				
						<StyledFixImg src={TrustImg} alt="trust" />
					</ImgsContainer>

					<StyledColorOrange>Trust</StyledColorOrange>
					<StyledFixp>
						<Plato>
							You get to have an idea of your fee before you commit; and yet,
							you only make payment when the job is successfully completed
						</Plato>
					</StyledFixp>
				</StyledFixCenter>
				<StyledFixCenter>
					<ImgsContainer>
						<StyledFixImg src={Convenience} alt="convenience" />
					</ImgsContainer>

					<StyledColorOrange>Convience</StyledColorOrange>
					<StyledFixp>
						<Plato>
							Our site is quite easy to use through simple steps: sign up, lodge
							your complaint, then sit back and view the real-time status
							updates on your dashboard, while we FixIt for you
						</Plato>
					</StyledFixp>
				</StyledFixCenter>
				<StyledFixCenter>
					<ImgsContainer>
						<StyledFixImg src={ProfessionalImg} alt="professionals" />
					</ImgsContainer>

					<StyledColorOrange> Professionalism</StyledColorOrange>
					<StyledFixp>
						<Plato>
							With a team of very experienced professionals, we approach each
							request on a case-by-case basis, ensuring our client gets updated
							every step of the way and is given only the best result
						</Plato>
					</StyledFixp>
				</StyledFixCenter>
			</StyledFixBox>
		</div>
	);
}
