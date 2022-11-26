import Styled from 'styled-components';

const TeamTemplate = ({ teamTemplate }) => {
	return (
		<StyledContainer  style={{ maxWidth: '1540px', margin: '0 auto'}}>
			<Team>
				{teamTemplate.map((teamMembers) => (
					<div className="border">
						<img
							src={teamMembers.image}
							alt={teamMembers.name}
							className="place-img"
						/>
						<h2>{teamMembers.name}</h2>
						<p>{teamMembers.role}</p>
					</div>
				))}
			</Team>
		</StyledContainer>
	);
};

export default TeamTemplate;

export const Team = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 20px;
row-gap: 20px;
text-align: center;
margin: 50px 0;

.border{
    background: #FFFFFF;
    border: none;
    border-radius: 8px;
    padding: 30px;
}

h2, p{
    margin: 0 10px;
}

h2{
    font-size: 1rem;
    font-weight: 500;
    margin-top: 20px;
    color: #2B2C34;
}
p{
    color: #6F7174;
}

@media screen and (max-width:420px) {
    grid-template-columns: 1fr;
}
@media screen and (min-width:1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}


`;

export const StyledContainer = Styled.div`
    
    padding: 0 20px;

    // @media screen and (width: 1280px) {
    //     max-width: 1240px;
    //     margin: 0 auto;
    // }

`;
