import { removeCookies } from 'cookies-next';
import Link from 'next/link';
import React, { useContext } from 'react'
import { Store } from '../utils/Store';

function HamburgerDark( {onClose} ) {

const [state,dispatch] = useContext(Store);
const {userInfo} = state;

const handleClose = () => {
    onClose()
}

const handleLogout = () => {
    
    dispatch({type: 'USER_LOGOUT'});
    removeCookies('userInfo');
        
}

return (
    <div className='absolute rounded-bl-[20px] bg-[#f8f8f8] z-[9999] right-0 w-[250px] h-[400px] mt-[-20px] text-center'>
        <div className='pt-6 '>
            <div className=''>
                    <p className='font-lato text-[#171717] ml-[10px] mb-[20px] text-[18px]'> Menu </p>
                    <p className='font-lato text-[#171717] ml-[10px] mb-[20px] text-[18px]'> Offers</p>
                    <p className='font-lato text-[#171717] ml-[10px] mb-[20px] text-[18px]'> Foods </p>
                    <p className='font-lato text-[#171717] ml-[10px] mb-[20px] text-[18px]'> Services </p>
                    <p className='font-lato text-[#171717] ml-[10px] mb-[20px] text-[18px]'> Groceries </p>
                </div>
                <div>
                    {userInfo?(
                    
                        <p onClick={handleLogout} className='font-lato mt-[50px] ml-[10px] text-[#171717] mr-2 cursor-pointer'>{userInfo.name}</p>
                    
                    ):(
                        <Link href='/login'>
                            <p className='font-lato mt-[50px] ml-[10px] text-[#171717]'>Login</p>
                        </Link>
                        
                    )}

                    <button className=' ml-[10px] font-lato mt-[40px] font-bold text-[#f8f8f8] text-[14px] border border-[#FF6A26] rounded w-[100px] h-[30px] bg-[#FF6A26]
                        ' onClick={handleClose}>Close</button>
                    
                </div>
        </div>
    </div>
  )
}

export default HamburgerDark