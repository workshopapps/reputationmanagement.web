import { StyledButton, StyledTextButton } from '../../components/Styles/Body/Button.styled';
import {
	StyledH1,
	StyledH3,
	StyledText,
	StyledH2Center,
} from '../../components/Styles/Body/Text.styled';


const WeRemoveGoogleSearch = () => {
	return (
		<>
			<StyledH1>
				Team Soket <span>Fixit</span>{' '}
			</StyledH1>
			<StyledH1 blue>
				Team Soket <span>Fixit</span>
			</StyledH1>
			<StyledText>
				We offer services that improve your brand’s image; they include
				reviewing and sorting negative comments about your business.
			</StyledText>
            <StyledButton>Click here to learn</StyledButton>
            <StyledButton outlined>Click here to learn</StyledButton>
			<StyledText subTitle>Hello</StyledText>
			<StyledH2Center>How We Fixit</StyledH2Center>
			<StyledH3>Remove Negative Google Reviews</StyledH3>
            <StyledTextButton>Learn More</StyledTextButton>
		</>
	);
};

export default WeRemoveGoogleSearch;
