import { removeCookies } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import HamburgerDark from './Hamburger';
import { Store } from '/utils/Store';

function NavbarDark() {

const [state,dispatch] = useContext(Store);
const {userInfo} = state;
const [isOpen, setIsOpen] = useState(false);

const router = useRouter();

const handleLogout = () => {
    
    dispatch({type: 'USER_LOGOUT'});
    removeCookies('userInfo');
    router.push('/');
        
}

const handleClick = () => {
    setIsOpen(!isOpen)
}


return (
    <div className=''>
        <div className='text-[#171717] font-poppins text-[20px] pt-4 ml-4 flex justify-between  md:hidden'>
            <div>
                <Link href='/'>
                    <p className='pl-4 cursor-pointer'>Foody</p>
                </Link>
            </div>
            <div className={`${isOpen ? 'hidden': 'pt-2 pr-4 space-y-2 rounded group cursor-pointer'}`} onClick={handleClick}>
                <span className="block w-8 h-0.5 bg-[#171717j] "></span>
                <span className="block w-8 h-0.5 bg-[#171717j] "></span>
                <span className="block w-8 h-0.5 bg-[#171717j] "></span>
            </div>
                {isOpen && (
                    <HamburgerDark onClose={() => setIsOpen(false)}/>
                )}
        </div>

        <div className='hidden md:flex bg-[#171717] justify-between pt-[18px] h-[70px] text-[#171717]
            px-[21px] lg:max-w-[1242px] lg:pt-[24px] lg:h-[84px] mx-auto rounded-b-[30px] lg:ml-[130px]'>
            
            <div>
                <Link href='/'>
                    <h1 className='font-poppins text-[#f8f8f8] font-medium text-[20px] lg:text-[24px] ml-4 lg:ml-0 cursor-pointer'>Foody</h1>
                </Link>
            </div>
            <div className='flex'>
                <p className='font-lato text-[#f8f8f8]/70 ml-[40px] text-[14px] lg:ml-[60px] lg:text-[18px] md:h-[34px] md:hover:text-[#f8f8f8] md:hover:border-b border-[#f8f8f8]/70 transition-all duration-200 ease-in-out cursor-pointer'> Menu </p>
                <p className='font-lato text-[#f8f8f8]/70 ml-[40px] text-[14px] lg:ml-[60px] lg:text-[18px] md:h-[34px] md:hover:text-[#f8f8f8] md:hover:border-b border-[#f8f8f8]/70 transition-all duration-200 ease-in-out cursor-pointer'> Offers</p>
                <p className='font-lato text-[#f8f8f8]/70 ml-[40px] text-[14px] lg:ml-[60px] lg:text-[18px] md:h-[34px] md:hover:text-[#f8f8f8] md:hover:border-b border-[#f8f8f8]/70 transition-all duration-200 ease-in-out cursor-pointer'> Foods </p>
                <p className='font-lato text-[#f8f8f8]/70 ml-[40px] text-[14px] lg:ml-[60px] lg:text-[18px] md:h-[34px] md:hover:text-[#f8f8f8] md:hover:border-b border-[#f8f8f8]/70 transition-all duration-200 ease-in-out cursor-pointer'> Services </p>
                <p className='font-lato text-[#f8f8f8]/70 ml-[40px] text-[14px] lg:ml-[60px] lg:text-[18px] md:h-[34px] md:hover:text-[#f8f8f8] md:hover:border-b border-[#f8f8f8]/70 transition-all duration-200 ease-in-out cursor-pointer'> Groceries </p>
            </div>
            <div>
                {userInfo?(
                
                    <p onClick={handleLogout} className='font-lato text-[#f8f8f8]/70 lg:text-[18px] mr-2 cursor-pointer'>{userInfo.name}</p>
                
                ):(
                    <Link href='/login'>
                        <p className='font-lato text-[#f8f8f8]/70 md:hover:text-[#f8f8f8] md:hover:border-b border-[#f8f8f8]/70 transition-all duration-200 ease-in-out cursor-pointer lg:text-[18px]'>Login</p>
                    </Link>
                    
                )}
                
            </div>
        </div>
    </div>
  )
}

export default NavbarDark