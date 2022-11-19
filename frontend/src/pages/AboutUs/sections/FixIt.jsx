import {
	StyledFixHeader,
	StyledFixImg,
	StyledFixCenter,
	StyledFixBox,
	StyledColor,
	StyledColorBlue,
	StyledColorOrange,
	StyledFixp,
} from '../styled/Fix.styled';

export default function Fix() {
	return (
		<>
			<StyledFixHeader>
				Why Choose <StyledColorBlue>Fix</StyledColorBlue>
				<StyledColor>It</StyledColor>
			</StyledFixHeader>
			<StyledFixBox>
				<StyledFixCenter>
					<StyledFixImg src="assets/images/Trust.jpg" alt="trust" />
					<StyledColorOrange>Trust</StyledColorOrange>
					<StyledFixp>
						<p>
							You get to have an idea of your fee before you commit: and yet,
							you only make payment when the job is successfully completed.
						</p>
					</StyledFixp>
				</StyledFixCenter>
				<StyledFixCenter>
					<StyledFixImg src="assets/images/Convenience.jpg" alt="convenience" />
					<StyledColorOrange>Convience</StyledColorOrange>
					<StyledFixp>
						<p>
							our site is quite easy to use through simple steps: sign up, lodge
							your complaint, then sit back and view the real-time status
							updates on your dashboard,while we Fixit for you
						</p>
					</StyledFixp>
				</StyledFixCenter>
				<StyledFixCenter>
					<StyledFixImg
						src="assets/images/Professionalism.jpg"
						alt="professionals"
					/>
					<StyledColorOrange> Professionalism</StyledColorOrange>
					<StyledFixp>
						<p>
							With a team of very experienced professionals, we approach each
							request on a case-by-case basis ensuring our client gets updated
							every step of the way and is given only the best result.
						</p>
					</StyledFixp>
				</StyledFixCenter>
			</StyledFixBox>
		</>
	);
}
