import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';

function Footer() {
	return (
		<footer className="bg-[#233BA9] w-full">
			<div className="flex flex-col text-center md:text-left gap-8 md:gap-[10%] md:flex-row items-center  py-14 md:px-10 h-full  justify-between">
				<FooterSocials />
				<FooterLinks />
			</div>
			<hr className='border-3 border-[#A5A6A8] w-[90%] m-auto' />
			<div className="p-5 text-center">
				<p className="text-[16px] font-[100] text-[#A5A6A8] leading-[16px]">
					© 2022 Fixit. All rights reserved
				</p>
			</div>
		</footer>
	);
}

export default Footer;
