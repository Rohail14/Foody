import Link from 'next/link'
import React, { useState } from 'react'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import Navbar from './Navbar.js';
import Modal from '../components/Modal'
import ReactPlayer from 'react-player'

function Hero() {

    const [modal, showModal] = useState(false);

    return (
        <div className='pizza-bg md:bg-none md:bg-[#171717] h-[600px] md:h-[650px] lg:h-[800px]'>
            <Navbar/>
            <div className='relative md:flex md:mt-2'>
                <div className='animation-heroText md:animate-none z-[2] flex flex-col text-center text-[#f8f8f8] ml-auto mr-auto mt-[100px] max-w-[450px]
                    md:text-left md:ml-10 lg:ml-[116px] lg:max-w-[585px]'>
                    <h1 className='font-poppins font-bold text-[43px] leading-[52px] md:text-[44px] lg:text-[57px] lg:leading-[68.96px] '>The <span className='text-[#FF6A26] '>Tastiest</span> Food with the Fastest <span className='text-[#FF6A26]'>Delivery</span> </h1>
                    <p className='mt-5 font-lato font-medium text-[14px] text-[#f8f8f8]/90 md:mt-6 lg:mt-[27px] lg:text-[18px]'>When you are tired and too lazy to cook,<br/> we are just one click away</p>
                    <div className='ml-auto mr-auto lg:flex md:ml-[1px] md:mt-4 lg:items-center lg:mt-[68px]'>
                        <button className='mt-[50px] font-lato font-bold text-[#f8f8f8] text-[14px] border border-[#FF6A26] rounded w-[200px] h-[45px] bg-[#FF6A26]
                        md:w-[160px] md:hover:bg-[#FF6A26]/90 md:hover:border-[##FF6A26]/70 transition-all duration-200 lg:w-[175px] lg:h-[56px] lg:mt-0'>Order Now</button>
                        <div className='mt-10 ml-8 md:ml-4 md:mt-10 lg:mt-0 lg:ml-14'>
                            
                                <div className='flex cursor-pointer md:hover:translate-x-2 transition-all duration-300 ease-in-out' onClick={() => showModal(true)}>
                                    <PlayCircleFilledOutlinedIcon fontSize='large'/>
                                    <p className='font-lato text-[12px] mt-2 ml-2 text-[#f8f8f8]/80'>Order Process</p>
                                </div>
                                <Modal
                                        onClose={() => showModal(false)}
                                        show = {modal}
                                        >
                                </Modal>
                            
                        </div>
                    </div> 
                </div>

                <div className='animation-pizza hidden md:block absolute top-[60%] right-0 z-[1]'>
                    <img className=' md:w-[534px] md:h-[184px]  lg:w-[724px] lg:h-[267px] ' src='pizza-hero.png' alt=''/>
                </div>
            </div>
        </div>
  )
}

export default Hero