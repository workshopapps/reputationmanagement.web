import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../../components/Styles/Body/Button.styled';
import Arrow from '../../../assets/images/arrow-right.png';

const OpeningTemplate = ({ openings }) => {
	return (
		<>
			{openings.length > 0 ? (
				openings.map((open, key) => {
					return (
						<>
							<StyledDivContainer>
								<h2 className="text-2xl font-bold mt-12">{open.title}</h2>

								<div className=" flex flex-col mt-5 leading-7">
									<h4>{open.desc}</h4>
								</div>
								<div className="flex gap-2 mt-8">
									<img src={Map} alt="" className="w-full" />
									<h5 className="mx-2 font-bold">Remote</h5>
								</div>

								<Link
									className="my-5"
									to={open.to}
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
									}}
								>
									<StyledButton
										outlined
										className=" flex items-center mt-3 justify-center"
									>
										Apply now
										<img src={Arrow} alt="" className="mx-2" />
									</StyledButton>
								</Link>
							</StyledDivContainer>
						</>
					);
				})
			) : (
				<StyledErrorbox>
					<StyledErrorText>Openings does not exist</StyledErrorText>
				</StyledErrorbox>
			)}
		</>
	);
};

const StyledErrorbox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 90vw;
`;
const StyledErrorText = styled.h2`
	text-align: center;
	font-weight: 700;
	font-size: 120%;
	border: 2px rgb(255, 0, 0) solid;
	padding: 15px
`;

const StyledDivContainer = styled.div`
	width: 350px;
	padding: 25px 20px;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	border: 1px solid #e4e4e5;

	@media screen and (max-width: 612px) {
		width: 100%;
		height: 340px;
	}
`;

export default OpeningTemplate;
