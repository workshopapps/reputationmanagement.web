import React from 'react';
import FooterData from './FooterData';
import twitter from '../../../assets/images/Twitter.png';
import faceb from '../../../assets/images/Facebook.png';
import insta from '../../../assets/images/Instagram.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: space-between;
	gap: 2em;
	@media (max-width: 768px) {
		display: flex;
		gap: 1em;
	}
`;

function FooterLinks() {
	return (
		<Div className="flex flex-col justify-between gap-y-8 w-4/5 md:w-full">
			<div className=" flex gap-5 justify-between md:gap-10">
				<div className="flex flex-col gap-2 self-start items-start w-3/4">
					<p className={fHeadingClasses}>Explore</p>
					<div className=" flex flex-col items-start space-y-2 text-left">
						{FooterData[0].map((link, index) => {
							return (
								<Link to={link.url} key={index} className={aStyle}>
									{link.text}
								</Link>
							);
						})}
					</div>
				</div>

				<div className="flex flex-col gap-2 w-1/2 self-start items-start ">
					<p className={fHeadingClasses}>Links</p>
					<div className=" space-y-2 text-left">
						{FooterData[1].map((link, index) => {
							return (
								<Link to={link.url} key={index} className={aStyle}>
									{link.text}
								</Link>
							);
						})}
					</div>
				</div>
			</div>

			<div className="my-3 lg:m-0">
				<p className={fHeadingClasses}>Follow us</p>

				<div className="my-3 flex gap-5 ">
					<img src={faceb} alt="icon" className="" />
					<img src={twitter} alt="icon" className="" />
					<img src={insta} alt="icon" className="" />
				</div>

				<div className="mt-8 w-full max-w-[520px] ">
					<label className="block text-white pb-3">
						Subscribe to our newsletter
					</label>
					<StyledSubscribe className=" flex">
						<input
							type="email"
							placeholder="Enter your email"
							className="w-full  py-2 px-5 rounded-l"
							style={{ minWidth: '225px', paddingLeft: '10px' }}
						/>
						<button
							className="bg-[#F16F04] sm:w-2/5 w-full md:w-2/5 py-2 px-5 rounded-r text-white "
							style={{ minWidth: '115px' }}
						>
							Subscribe
						</button>
					</StyledSubscribe>
				</div>
			</div>
		</Div>
	);
}

const StyledSubscribe = styled.div`
	@media (max-width: 500px) {
		flex-direction: column;
		align-items: center;
		gap: 10px;
		input,
		button {
			border-radius: 0.25rem;
		}
	}
`;

const fHeadingClasses = 'my-1 mt-4 md:mt-0 text-2xl font-[600] text-[#F7F7F7]';

const aStyle = `block pb-1 flex self-start text-[15px] hover:text-[#F16F04] font-[400] text-[#F1F3F9] text-md`;

export default FooterLinks;
