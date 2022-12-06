import React from 'react'
import fixlogo from '../../../assets/images/Fix-it-Recovered-removebg-preview 1.png';
function FooterSocials() {
	return (
		<div className="flex flex-col self-start ml-[10%] md:ml-0 gap-5 items-center  md:w-2/5 md:gap-14">
			{/* Social Media icons start */}
			<div className="flex flex-col md:self-start w-full md:pt-2 gap-5">
				<img src={fixlogo} alt="icon" className='w-1/2' />
				<p className="text-white text-left"> Your brand’s image is our concern.</p>
			</div>
			{/* Social Media icons ends */}
		</div>
	);
}

export default FooterSocials;
