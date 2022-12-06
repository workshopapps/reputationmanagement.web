import React from 'react';
import {
	StoryImg,
	StyledStory,
	StoryP,
	StoryHead,
	ImgCon,
	StyledStorytxt,
} from '../styled/Story.styled';
import SImg from '../img/Our-Story.png';

export default function Story() {
	return (
		<div className='bg-[#eef1fc]'>
			<StyledStory data-testid="story-element">
				<StyledStorytxt>
					<StoryHead>Our Story</StoryHead>
					<StoryP>
						Founded in November 2022 during an internship program of great
						minds,the founder took note of the rising trend: high profile
						individual and business are becoming more susceptible to negative
						review, where a few words could have a devastating impact on the
						reputation, sales, recruitment efforts of the victim. for this
						reason, the fixit vision came to life.
					</StoryP>
					<StoryP>
						At fixit, we aim to provide a stellar reputation management service
						by utlising the lastest technology and the most effective user
						experience processes
					</StoryP>
				</StyledStorytxt>
				<ImgCon>
					<StoryImg src={SImg} />
				</ImgCon>
			</StyledStory>
		</div>
	);
}
