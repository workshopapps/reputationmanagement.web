import React from 'react';
import FooterLinks from "./FooterLinks"
import FooterSocials from "./FooterSocials"

function Footer() {
    return (
        <footer className="flex flex-col-reverse gap-20 md:flex-row items-center py-14 px-16 h-full  justify-between bg-[#233BA9] w-full  ">
            <FooterSocials />
            <FooterLinks />
        </footer>
    );
}

export default Footer;