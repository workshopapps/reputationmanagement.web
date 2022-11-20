// import React from 'react';
// import FooterData from "./FooterData"
// import twitter from '../../../assets/images/Twitter.png'
// import faceb from '../../../assets/images/Facebook.png'
// import insta from '../../../assets/images/Instagram.png'
// import styled from 'styled-components'
// =======
// import FooterData from './FooterData';
// import twitter from '../../../assets/images/Twitter.png';
// import faceb from '../../../assets/images/Facebook.png';
// import insta from '../../../assets/images/Instagram.png';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const Div = styled.div`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 2.5fr;
// 	justify-content: space-between;
// 	gap: 5em;
// 	@media (max-width: 700px) {
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		gap: 1em;
// 		justify-content: center;
// 	}
// `;

// function FooterLinks() {
// 	return (
// 		<Div className="flex flex-col justify-between gap-y-8 w-4/5 md:w-full">
// 			<div className="flex flex-col gap-2">
// 				<p className=" text-2xl font-[700] text-[#F7F7F7] leading-[22px] mb-3">
// 					Explore
// 				</p>
// 				<div>
// 					{FooterData[0].map((link, index) => {
// 						return (
// 							<Link to={link.url} key={index} className={aStyle}>
// 								{link.text}
// 							</Link>
// 						);
// 					})}
// 				</div>
// 			</div>

// 			<div className="flex flex-col gap-2">
// 				<p className=" text-2xl font-[700] text-[#F7F7F7] leading-[22px] mb-3">
// 					Community
// 				</p>
// 				<div>
// 					{FooterData[1].map((link, index) => {
// 						return (
// 							<Link to={link.url} key={index} className={aStyle}>
// 								{link.text}
// 							</Link>
// 						);
// 					})}
// 				</div>
// 			</div>

// 			<div className="flex flex-col justify-between gap-5 items-center md:items-start w-full ">
// 				<span className="text-white">Follow us</span>
// 				<div className="flex justify-around gap-5 ">
// 					<img src={faceb} alt="icon" className="" />
// 					<img src={twitter} alt="icon" className="" />
// 					<img src={insta} alt="icon" className="" />
// 				</div>

// 				<div className="w-full ">
// 					<label></label>
// 					<div className=" flex flex-col md:flex-row gap-4 md:gap-0">
// 						<input
// 							type="email"
// 							placeholder="type in your email"
// 							className="w-full p-3"
// 						/>
// 						<button className="bg-[#F16F04] py-2 px-5 rounded text-white ">
// 							Subscribe
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</Div>
// 	);
// }

// const aStyle = `block pb-1 text-lg font-[400] text-[#F1F3F9] leading-[35px]`;

// export default FooterLinks;
