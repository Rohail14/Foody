import React from 'react'

function Grocery() {
  return (
    <div className='grocery-bg mt-[80px] md:mt-[120px] lg:mt-[60px] lg:bg-none md:pt-10 md:bg-[#f8f8f8] h-[600px] md:h-[650px] lg:h-[900px]'>
            <div className=' md:w-full md:flex md:mt-2]'>
                <div className='hidden lg:flex lg:w-[50%] lg:flex-wrap lg:justify-evenly lg:mt-[40px]'>
                    <div className='md:w-[209px] md:h-[266px] md:mt-[59px] mx-[10%] mb-[100px] text-center lg:text-left lg:mb-0 lg:w-[209px] lg:h-[269px] bg-white rounded-[20px] lg:hover:shadow-xl transition-all duration-200 ease-in-out'>
                        <img className='w-full h-[180px] rounded-t-[20px] object-cover' src='grocery.jpg'/>
                        <h2 className='font-lato font-bold text-[18px] text-center mt-[20px] lg:text-[18px]'>Grocery Items</h2>
                        <p className='font-lato font-regular mt-[10px] text-[10px] text-[#ff6a26] mx-auto lg:mt-[10px] underline cursor-pointer lg:w-[62px]'>Order Now</p>
                    </div>
                    <div className='md:w-[209px] md:h-[266px] md:mt-[10px] md:ml-[-20px] mx-[10%] mb-[100px] text-center lg:text-left lg:mb-0 lg:w-[209px] lg:h-[269px] bg-white rounded-[20px] lg:hover:shadow-xl transition-all duration-200 ease-in-out'>
                        <img className='w-full h-[180px] rounded-t-[20px] object-cover' src='veggies.jpg'/>
                        <h2 className='font-lato font-bold text-[18px] text-center mt-[20px] lg:text-[18px]'>Veggies</h2>
                        <p className='font-lato font-regular mt-[10px] text-[10px] text-[#ff6a26] mx-auto lg:mt-[10px] underline cursor-pointer lg:w-[52px]'>Order Now</p>
                    </div>
                    <div className='md:w-[209px] md:h-[266px] md:mt-[69px] md:mr-[10px] mx-[10%] mb-[100px] text-center lg:text-left lg:mb-0 lg:w-[209px] lg:h-[269px] bg-white rounded-[20px] lg:hover:shadow-xl transition-all duration-200 ease-in-out'>
                        <img className='w-full h-[180px] rounded-t-[20px] object-cover' src='fruits.jpg'/>
                        <h2 className='font-lato font-bold text-[18px] text-center mt-[20px] lg:text-[18px]'>Fruits</h2>
                        <p className='font-lato font-regular mt-[10px] text-[10px] text-[#ff6a26] mx-auto lg:mt-[10px] underline cursor-pointer lg:w-[52px]'>Order Now</p>
                    </div>
                    
                </div>
                
                <div className='animation-heroText md:animate-none z-[2] flex flex-col text-center text-[#f8f8f8] lg:text-[#171717] ml-auto mr-auto pt-[100px] max-w-[450px]
                lg:text-left md:max-w-[600px]  lg:ml-[116px] lg:max-w-[585px]'>
                    <h1 className='font-poppins font-bold  text-[43px] leading-[52px] md:text-[54px] md:leading-[65px] lg:text-[57px] lg:leading-[68.96px] '>We also care about your Home and Kitchen </h1>
                    <p className='mt-7 font-lato font-medium text-[14px] text-[#f8f8f8]/90 lg:text-[#171717]/90 md:mt-8 lg:mt-[27px] lg:text-[18px]'>Order fresh vegetables and other groceries <br/> at your doorstep with just one click</p>
                    <div className='ml-auto mr-auto mt-[30px] lg:flex md:mt-4 lg:ml-[1px] lg:items-center lg:mt-[68px]'>
                        <button className='mt-[50px] font-lato font-bold text-[#f8f8f8] text-[14px] border border-[#FF6A26] rounded w-[200px] h-[45px] bg-[#FF6A26]
                         md:hover:bg-[#FF6A26]/90 md:hover:border-[##FF6A26]/70 transition-all duration-200 lg:w-[175px] lg:h-[56px] lg:mt-0'>Go Shopping</button>
                    </div> 
                </div>
            </div>
    </div>
  )
}

export default Grocery