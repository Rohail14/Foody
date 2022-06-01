import React from 'react'

function About() {
  return (
    <div className='pt-[50px] bg-[#f8f8f8]'>
        <div className='flex flex-col items-center'>
            <h1 className='font-poppins font-semibold text-[40px] text-[#171717]'>What We Serve</h1>
            <img className='mt-2 w-[250px]' src='dash.svg'/>
        </div>
        <div className='md:px-5 md:mt-[50px] md:pb-[50px] lg:pb-[123px]'>
            <div className='flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly'>
                <div className='bg-[#fff] w-[360px] h-[400px] mt-[80px] rounded-xl shadow-xl md:w-[300px] md:h-[360px] md:mr-3 lg:h-[380px] lg:hover:shadow-2xl transition-all duration-200 ease-in-out'>
                    <div className='flex flex-col items-center'>
                        <img className='w-[172px] h-[172px] mt-[45px] mb-[45px] md:mt-[20px]' src='easy-order.png '/>
                        <h3 className='text-poppins text-[#171717] font-semibold text-[26px] mb-[18px] md:text-[24px] lg:mb-[20px]'>Easy Order</h3>
                        <p className='w-[235px] text-[#171717]/80 font-lato text-center'>You only need a few steps in ordering food</p>
                    </div>
                </div>
                <div className='bg-[#fff] w-[360px] h-[400px] mt-[80px] rounded-xl shadow-xl md:w-[300px] md:h-[360px] md:mr-3 lg:h-[380px] lg:mt-[120px] lg:hover:mt-[80px] lg:hover:shadow-2xl transition-all duration-200 ease-in-out'>
                    <div className='flex flex-col items-center'>
                        <img className='w-[192px] h-[162px] mt-[45px] mb-[45px] md:mt-[20px] md:h-[172px]' src='fastest-delivery.png '/>
                        <h3 className='text-poppins text-[#171717] font-semibold text-[26px] mb-[18px] md:text-[24px] lg:mb-[20px]'>Fastest Delivery</h3>
                        <p className='w-[235px] text-[#171717]/80 font-lato text-center'>Delivery that is always on time or even faster</p>
                    </div>
                </div>
                <div className='bg-[#fff] w-[360px] h-[400px] mt-[80px] mb-[45px] rounded-xl shadow-xl md:w-[300px] md:h-[360px] lg:h-[380px] md:mt-[124px] lg:hover:shadow-2xl transition-all duration-200 ease-in-out'>
                    <div className='flex flex-col items-center'>
                        <img className='w-[242px] h-[162px] mt-[45px] mb-[45px] md:mt-[20px] md:h-[172px]' src='best-quality.png '/>
                        <h3 className='text-poppins text-[#171717] font-semibold text-[26px] mb-[18px] md:text-[24px] lg:mb-[20px]'>Best Quality</h3>
                        <p className='w-[235px] text-[#171717]/80 font-lato text-center'>Not only fast for us but also quality is number one</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About