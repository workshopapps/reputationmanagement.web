import React from 'react';
import FooterData from './FooterData';
// import twitter from '../../../assets/images/Twitter.png';
// import faceb from '../../../assets/images/Facebook.png';
// import insta from '../../../assets/images/Instagram.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';







const Div = styled.div`
	display: flex;
	width: 700px;
	justify-content: space-between;
	gap: 2em;
	@media (max-width: 768px) {
		display: flex;
		gap: 1em;
	}
`;

function FooterLinks() {
	return (
		<Div className="flex  justify-between gap-y-8">
			<div className="flex flex-col gap-2 self-start items-start">
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

			<div className="flex flex-col gap-2 self-start items-start ">
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
			<div className="flex flex-col gap-2 self-start items-start ">
				<p className={fHeadingClasses}>Follow us</p>

				<div className="my-3 flex gap-5 hover:text-[#f16f04]">
					<Link to="/">
						<FaFacebookF color="white" />
					</Link>

					<Link to="/">
						<GrTwitter color="white" />
					</Link>

					<Link to="/">
						<BsInstagram color="white" />
					</Link>

					{/* <img src={faceb} alt="icon" className="" />
					<img src={twitter} alt="icon" className="" />
					<img src={insta} alt="icon" className="" /> */}
				</div>
			</div>
		</Div>
	);
}

// const StyledSubscribe = styled.div`
// 	@media (max-width: 500px) {
// 		flex-direction: column;
// 		align-items: center;
// 		gap: 10px;
// 		input,
// 		button {
// 			border-radius: 0.25rem;
// 		}
// 	}
// `;

const fHeadingClasses = 'my-1 mt-4 md:mt-0 text-2xl font-[600] text-[#F7F7F7]';

const aStyle = `block pb-1 flex self-start text-[15px] hover:text-[#F16F04] font-[400] text-[#F1F3F9] text-md`;

export default FooterLinks;
