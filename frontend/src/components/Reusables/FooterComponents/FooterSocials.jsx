import React from 'react';
import twitter from '../../../assets/images/Twitter.png'
import faceb from '../../../assets/images/Facebook.png'
import insta from '../../../assets/images/Instagram.png'
import fixlogo from '../../../assets/images/Fix-it-Recovered-removebg-preview 1.png'


function FooterSocials() {
    return (
        <div className="flex flex-col gap-5 items-center md:gap-14">
            {/* Social Media icons start */}
            <div className="flex flex-col gap-5">
<img src={fixlogo} alt='icon'/>
<p className='text-white'> Your brand’s image is our concern.</p>
            </div >
            {/* Social Media icons ends */}
            <div className="flex gap-x-[8px] ">
                <p className="text-[16px] font-[100] text-[#F7F7F7] leading-[16px] font-['Red_Rose']">© 2022 Fixit. All rights reserved</p>
            </div>
        </div>
    );
}

export default FooterSocials;