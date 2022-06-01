import React from 'react'

function Footer () {
  return (
    <div className='pt-[180px] bg-[#f8f8f8] mt-[-100px] lg:pt-[350px] lg:mt-[-150px]'>
        <div className='mb-[100px] text-center lg:mb-[150px] '>
            <h2 className='font-poppins font-medium text-[24px] lg:text-[32px] text-[#171717] mb-[14px] lg:mb-[18px]'>Foody</h2>
            <p className='font-lato text-[#171717]/70 lg:text-[18px]'>Have the best choice</p>
        </div>
        <div className='flex flex-wrap justify-around mx-4 lg:justify-between lg:ml-[116px] lg:mr-[50px]'>
            <div className='mr-[20px] mb-[50px]'>
                <h2 className='font-poppins font-medium text-[18px] text-[#171717] mb-[20px] lg:text-[20px] lg:mb-[22px]'>Company</h2>
                <p className='font-lato text-[#171717]/70 text-[14px] mb-[10px] lg:cursor-pointer lg:hover:underline lg:hover:text-[#171717] lg:text-[16px] lg:mb-[12px]'>About Us</p>
                <p className='font-lato text-[#171717]/70 text-[14px] mb-[10px] lg:cursor-pointer lg:hover:underline lg:hover:text-[#171717] lg:text-[16px] lg:mb-[12px]'>How it works</p>
            </div>
            <div className='mr-[20px] mb-[50px]'>
                <h2 className='font-poppins font-medium text-[18px] text-[#171717] mb-[20px] lg:text-[20px] lg:mb-[22px]'>Policy</h2>
                <p className='font-lato text-[#171717]/70 text-[14px] mb-[10px] lg:cursor-pointer lg:hover:underline lg:hover:text-[#171717] lg:text-[16px] lg:mb-[12px]'>FAQ</p>
                <p className='font-lato text-[#171717]/70 text-[14px] mb-[10px] lg:cursor-pointer lg:hover:underline lg:hover:text-[#171717] lg:text-[16px] lg:mb-[12px]'>Contact</p>
                <p className='font-lato text-[#171717]/70 text-[14px] mb-[10px] lg:cursor-pointer lg:hover:underline lg:hover:text-[#171717] lg:text-[16px] lg:mb-[12px]'>Shipping</p>
            </div>
            <div className='mr-[20px] mb-[50px]'>
                <h2 className='font-poppins font-medium text-[18px] text-[#171717] mb-[20px] lg:text-[20px] lg:mb-[22px]'>Get in touch</h2>
                <p className='font-lato text-[#171717]/70 text-[14px] mb-[10px] lg:cursor-pointer lg:hover:underline lg:hover:text-[#171717] lg:text-[16px] lg:mb-[12px]'>sales@foody.com</p>
                <p className='font-lato text-[#171717]/70 text-[14px] mb-[10px] lg:cursor-pointer lg:hover:underline lg:hover:text-[#171717] lg:text-[16px] lg:mb-[12px]'>1110-229-00998</p>
            </div>
            <div className='mr-[20px] mb-[50px] text-center'>
                <h2 className='lg:hidden font-poppins font-medium text-[18px] text-[#171717] mb-[20px] lg:text-[20px] lg:mb-[22px]'>Get our app</h2>
                <div className='lg:flex lg:space-x-5'>
                    <div className="flex mt-3 w-40 h-14 bg-black text-white rounded-xl items-center justify-center cursor-pointer hover:border-2 hover:border-[#f8f8f8] transition-all duration-75 ease-in-out">
                        <div className="mr-3">
                            <svg viewBox="0 0 384 512" width="20" >
                                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                            </svg>
                        </div>
                        <div>
                            <div className="text-xs text-left">Download on the</div>
                            <div className="text-[18px] font-semibold -mt-1 text-left">App Store</div>
                        </div>
                    </div>
                    <div className="flex mt-3 w-40 h-14 bg-black text-white rounded-xl items-center justify-center cursor-pointer hover:border-2 hover:border-[#f8f8f8] transition-all duration-75 ease-in-out">
                        <div className="mr-3">
                            <svg viewBox="30 336.7 120.9 129.2" width="20">
                                <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"/>
                                <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"/>
                                <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"/>
                                <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"/>
                            </svg>
                        </div>
                        <div>
                            <div className="text-xs text-left">Get it on</div>
                            <div className="text-[18px] font-semibold -mt-1 text-left">Google Play</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex  mx-[32%] space-x-8 mt-[80px] md:ml-[7%] pb-[20px] lg:mt-[100px]'>
            <div className='cursor-pointer hover:mt-[-5px] transition-all duration-200 ease-in-out'>
                <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 text-[#0B85E0] fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
                </svg>
            </div>
            <div className='cursor-pointer hover:mt-[-5px] transition-all duration-200 ease-in-out'>
                <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 text-[#03A9F4] fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    />
                </svg>
            </div>

            <div className='cursor-pointer hover:mt-[-5px] transition-all duration-200 ease-in-out'>
                <svg viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet" focusable="false" className="w-34 h-8 lg:w-34 lg:h-10">
                    <g viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet">
                        <g>
                            <path fill="#FF0000" d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31
                            c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56
                            C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30
                            S64.31,19.77,63,14.87z"></path>
                            <polygon fill="#FFFFFF" points="26.6,39.43 42.93,30 26.6,20.57"></polygon>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
  )

}

export default Footer