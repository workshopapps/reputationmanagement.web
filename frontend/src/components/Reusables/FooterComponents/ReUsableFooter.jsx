
import React from 'react';
import FooterLinks from "./FooterLinks"
import FooterSocials from "./FooterSocials"

import FooterSocials from './FooterSocials';

function Footer() {
	return (
		<footer className="bg-[#233BA9] w-full">
			<div className="flex flex-col-reverse gap-20 md:flex-row items-center py-14 px-16 h-full  justify-between">
				<FooterSocials />
				<FooterLinks />
			</div>
			<div className="p-5 text-center">
				<p className="text-[16px] font-[100] text-[#F7F7F7] leading-[16px] font-['Red_Rose']">
					© 2022 Fixit. All rights reserved
				</p>
			</div>
		</footer>
	);
}

export default Footer;
