import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import settingsIcon from '../../assets/images/settingsIcon.png';
import menuIcon8 from '../../assets/images/menuIcon8.png';
import textIcon from '../../assets/images/textIcon.png';
import rectangle from '../../assets/images/rectangle.png';


function Sidenav() {
    return (  
        <div className='w-[20vw] h-screen hidden md:flex flex-col
        border-r drop-shadow-lg fixed top-0 left-0'>
            <Link to='/'>
                <img src={logo} alt="" className='w-[88px] ml-[20%] my-[20px]' />
            </Link>
    
            <div className='flex flex-col flex-grow'>
                <div className='flex items-center px-1 my-3'>
                    <img src={rectangle} alt="" />
                    <Link className='ml-[20%] flex text-[#F16F04]'>
                        <img src={menuIcon8} alt="" />
                        <span className='ml-1'>Dashboard</span>
                    </Link>
                </div>
                <div className='flex items-center px-1'>
                    <Link className='ml-[20%] flex text-gray-500'>
                        <img src={textIcon} alt="" />
                        <span className='ml-2'>Requests</span>
                    </Link>
                </div>

                <Link className='ml-[20%] flex text-gray-500 mt-[350px]'>
                    <img src={settingsIcon} alt="" />
                    <span className='ml-2'>Settings</span>
                </Link>
            </div>
        </div>
    );
}

export default Sidenav;