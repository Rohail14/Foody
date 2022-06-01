import { removeCookies } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { Store } from '/utils/Store';
import Hamburger from '../components/Hamburger'

function Navbar() {

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
        <div className='text-[#f8f8f8] font-poppins text-[20px] pt-4 ml-4 flex justify-between  md:hidden'>
            <div>
                <Link href='/'>
                    <p className='pl-4 cursor-pointer'>Foody</p>
                </Link>
            </div>
            <div className={`${isOpen ? 'hidden': 'pt-2 pr-4 space-y-2 rounded group cursor-pointer'}`} onClick={handleClick}>
                <span className="block w-8 h-0.5 bg-[#f8f8f8] "></span>
                <span className="block w-8 h-0.5 bg-[#f8f8f8] "></span>
                <span className="block w-8 h-0.5 bg-[#f8f8f8] "></span>
            </div>
                {isOpen && (
                    <Hamburger onClose={() => setIsOpen(false)}/>
                )}
                
        </div>
        <div className='hidden md:flex bg-[#f8f8f8] justify-between pt-[18px] h-[70px] text-[#171717]
            px-[21px] lg:max-w-[1242px] lg:pt-[24px] lg:h-[84px] mx-auto rounded-b-[30px] lg:ml-[100px]'>
            
            <div>
                <Link href='/'>
                    <h1 className='font-poppins font-medium text-[20px] lg:text-[24px] ml-4 lg:ml-0 cursor-pointer'>Foody</h1>
                </Link>
            </div>
            <div className='flex'>
                <p className='font-lato text-[#171717]/70 ml-[40px] text-[14px] lg:ml-[60px] lg:text-[18px] md:h-[34px] md:hover:text-[#171717] md:hover:border-b border-[#171717]/70 transition-all duration-200 ease-in-out cursor-pointer'> Menu </p>
                <p className='font-lato text-[#171717]/70 ml-[40px] text-[14px] lg:ml-[60px] lg:text-[18px] md:h-[34px] md:hover:text-[#171717] md:hover:border-b border-[#171717]/70 transition-all duration-200 ease-in-out cursor-pointer'> Offers</p>
                <p className='font-lato text-[#171717]/70 ml-[40px] text-[14px] lg:ml-[60px] lg:text-[18px] md:h-[34px] md:hover:text-[#171717] md:hover:border-b border-[#171717]/70 transition-all duration-200 ease-in-out cursor-pointer'> Foods </p>
                <p className='font-lato text-[#171717]/70 ml-[40px] text-[14px] lg:ml-[60px] lg:text-[18px] md:h-[34px] md:hover:text-[#171717] md:hover:border-b border-[#171717]/70 transition-all duration-200 ease-in-out cursor-pointer'> Services </p>
                <p className='font-lato text-[#171717]/70 ml-[40px] text-[14px] lg:ml-[60px] lg:text-[18px] md:h-[34px] md:hover:text-[#171717] md:hover:border-b border-[#171717]/70 transition-all duration-200 ease-in-out cursor-pointer'> Groceries </p>
            </div>
            <div>
                {userInfo?(
                
                    <p onClick={handleLogout} className='font-lato text-[#171717]/70 lg:text-[18px] mr-2 cursor-pointer'>{userInfo.name}</p>
                
                ):(
                    <Link href='/login'>
                        <p className='font-lato text-[#171717]/70 md:hover:text-[#171717] md:hover:border-b border-[#171717]/70 transition-all duration-200 ease-in-out cursor-pointer lg:text-[18px]'>Login</p>
                    </Link>
                    
                )}
                
            </div>
        </div>
    </div>
  )
}

export default Navbar