import Link from 'next/link'
import React from 'react'

function SignUp() {
  return (
    <div className='relative bg-black mt-[130px] md:mt-[150px] lg:mt-[200px] text-center w-[80%] md:w-[50%] mx-auto rounded-[20px] p-5'>
        <h1 className='text-[#f8f8f8] font-poppins font-bold text-[20px] lg:text-[28px] lg:w-[80%] lg:mx-auto lg:mb-[64px] lg:pt-[24px]'>Become a Member and get discounts upto 50%</h1>
        <Link href='/register'>
          <button className='mt-[50px] font-lato font-medium text-[#f8f8f8] text-[16px] border border-[#FF6A26] rounded w-[140px] h-[40px] bg-[#FF6A26]
                         md:hover:bg-[#FF6A26]/90 md:hover:border-[##FF6A26]/70 transition-all duration-200 lg:w-[200px] lg:h-[50px] lg:mt-0 lg:mb-[42px] md:mb-[12px]'>Sign Up</button>
        </Link>
    </div>
  )
}

export default SignUp